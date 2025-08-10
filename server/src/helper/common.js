import jwt from "jsonwebtoken";


export const validatePhone = (phone) => {
    const cleaned = phone.replace(/\s|-/g, ''); // remove spaces and dashes

    const regex = /^(?:\+91|91|0)?[6-9]\d{9}$/;

    return regex.test(cleaned);
};

export const validateEmail = (email) => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
};

export const createToken = (_id) => {
    const jwtkey = process.env.ACCESS_TOKEN_SECRET;

    return jwt.sign({ _id }, jwtkey, { expiresIn: process.env.ACCESS_TOKEN_EXPIRY });
}