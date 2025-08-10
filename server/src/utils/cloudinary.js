import { v2 as cloudinary } from "cloudinary";
import fs from "fs";
// import sendResponse from "./apiResonse.js"; 

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

const uploadOnCloudinary = async (localFilePath) => {
    try {
        if (!localFilePath) return null;

        const response = await cloudinary.uploader.upload(localFilePath, {
            resource_type: "auto"
        });

        fs.unlinkSync(localFilePath); // Clean up local file
        return response;
    } catch (error) {
        if (localFilePath && fs.existsSync(localFilePath)) {
            fs.unlinkSync(localFilePath);
        }
        console.error("Cloudinary Upload Error:", error);
        throw new Error("Failed to upload file to Cloudinary");
    }
};

const deleteOnCloudinary = async (publicId) => {
    if (!publicId) {
        throw new Error("Public ID is missing for deletion");
    }

    try {
        const response = await cloudinary.uploader.destroy(publicId);

        if (response.result !== "ok" && response.result !== "not found") {
            throw new Error("Error while deleting the image from Cloudinary");
        }

        return response;
    } catch (error) {
        console.error("Cloudinary Deletion Error:", error);
        throw new Error("Failed to delete image on Cloudinary");
    }
};

export { uploadOnCloudinary, deleteOnCloudinary };
