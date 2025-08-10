import mongoose from "mongoose";

const normalUserSchema = new mongoose.Schema(
    {
        userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
        feedbacks: [{ type: mongoose.Schema.Types.ObjectId, ref: "Feedback" }],
        favoriteVendors: [{ type: mongoose.Schema.Types.ObjectId, ref: "Vendor" }],
        uploadedReviews: [
            {
                photoUrl: String,
                vendorId: { type: mongoose.Schema.Types.ObjectId, ref: "Vendor" },
                caption: String,
            },
        ],
        foodSafetyScores: [
            {
                vendorId: { type: mongoose.Schema.Types.ObjectId, ref: "Vendor" },
                score: Number,
                lastUpdated: Date,
            },
        ],
    },
    { timestamps: true }
);

module.exports = mongoose.model("NormalUser", normalUserSchema);
