import express from "express";
import { upload } from "../middlewares/multer.middleware.js";

const userRoute = express.Router();

import { loginUser, registerUser } from "../controllers/userController.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";

userRoute.get("/", (req, res) => {
    res.send("User details fetched");
});

userRoute.post("/create", upload.fields([{ name: "image", maxCount: 1 }]), registerUser); // signup
userRoute.post("/login", loginUser); // login

userRoute.patch("/details", (req, res) => {
    res.send("User details updated");
});

export { userRoute };
