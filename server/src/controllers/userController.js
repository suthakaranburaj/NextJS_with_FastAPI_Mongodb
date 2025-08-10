import User from "../models/user.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { sendResponse } from "../utils/apiResonse.js";
import { statusType } from "../utils/statusType.js";
import { validatePhone } from "../helper/common.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";

// Token generator functions
const generateAccessToken = (user) => {
    return jwt.sign(
        { user_id: user._id, role: user.role },
        process.env.ACCESS_TOKEN_SECRET,
        { expiresIn: "15m" }
    );
};

const generateRefreshToken = (user) => {
    return jwt.sign(
        {
            user_id: user._id,
            role: user.role,
            token_version: user.token_version || 0,
        },
        process.env.REFRESH_TOKEN_SECRET,
        { expiresIn: "7d" }
    );
};

const cookieOptions = {
    httpOnly: false,
    secure: true,
    sameSite: "Strict",
};

// ✅ Register User
const registerUser = asyncHandler(async (req, res) => {
    const { name, phone, pin, role } = req.body;
    // console.log("fweo",req.body);
    if (!name || !phone || !pin || !role) {
        return sendResponse(res, false, null, "Fields cannot be empty", statusType.BAD_REQUEST);
    }
    let image = null;
    if (req.files && req.files.image) {
        const avatarLocalPath = req.files.image[0].path;
        const image_temp = await uploadOnCloudinary(avatarLocalPath, { secure: true });
        image = image_temp?.secure_url;
    }

    if (!validatePhone(phone)) {
        return sendResponse(res, false, null, "Invalid phone number", statusType.BAD_REQUEST);
    }

    let user = await User.findOne({ phone });
    if (user) {
        return sendResponse(res, false, null, "User already exists, please login", statusType.BAD_REQUEST);
    }

    // Hash PIN
    const salt = await bcrypt.genSalt(10);
    const hashedPin = await bcrypt.hash(pin, salt);

    // Save User
    user = await User.create({ name, phone, pin: hashedPin, role, image });

    // Generate Tokens
    const accessToken = generateAccessToken(user);
    const refreshToken = generateRefreshToken(user);

    // Store refreshToken in DB
    user.refresh_token = refreshToken;
    await user.save();

    // Prepare response
    const userData = user.toObject();
    delete userData.pin;
    delete userData.refresh_token;

    return res
        .status(201)
        .cookie("accessToken", accessToken, cookieOptions)
        .cookie("refreshToken", refreshToken, cookieOptions)
        .json({
            status: true,
            success: true,
            accessToken,
            message: "User registered successfully",
            data: userData,
        });
});

const loginUser = asyncHandler(async (req, res) => {
    const { phone, pin } = req.body;

    if (!phone || !pin) {
        return sendResponse(res, false, null, "Phone and PIN are required", statusType.BAD_REQUEST);
    }

    if (!validatePhone(phone)) {
        return sendResponse(res, false, null, "Invalid phone number", statusType.BAD_REQUEST);
    }

    const user = await User.findOne({ phone });
    if (!user) {
        return sendResponse(res, false, null, "User does not exist", statusType.BAD_REQUEST);
    }

    const isMatch = await bcrypt.compare(pin, user.pin);
    if (!isMatch) {
        return sendResponse(res, false, null, "Phone or PIN is incorrect", statusType.BAD_REQUEST);
    }

    const accessToken = generateAccessToken(user);
    const refreshToken = generateRefreshToken(user);

    user.refresh_token = refreshToken;
    await user.save();

    const userData = user.toObject();
    delete userData.pin;
    delete userData.refresh_token;

    return res
        .status(200)
        .cookie("accessToken", accessToken, cookieOptions)
        .cookie("refreshToken", refreshToken, cookieOptions)
        .json({
            status: true,
            success: true,
            accessToken,
            message: "Login successful",
            data: userData,
        });
});

export { registerUser, loginUser };
