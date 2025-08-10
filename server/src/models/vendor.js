import mongoose from "mongoose";

const vendorSchema = new mongoose.Schema(
    {
        userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
        canOrderSupply: { type: Boolean, default: true },
        paymentMethods: [String],
        dashboard: {
            totalOrders: Number,
            pendingOrders: Number,
        },
        orderTracking: [
            {
                orderId: { type: mongoose.Schema.Types.ObjectId, ref: "Order" },
                status: String,
                estimatedDelivery: Date,
            },
        ],
        orderHistory: [{ type: mongoose.Schema.Types.ObjectId, ref: "Order" }],
        groupIds: [{ type: mongoose.Schema.Types.ObjectId, ref: "Group" }],
        feedbackQRCode: String,
    },
    { timestamps: true }
);

module.exports = mongoose.model("Vendor", vendorSchema);
