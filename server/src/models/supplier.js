import mongoose from "mongoose";

const supplierSchema = new mongoose.Schema(
    {
        userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
        inventory: [
            {
                itemName: String,
                quantity: Number,
                unit: String,
                price: Number,
                lastUpdated: { type: Date, default: Date.now },
            },
        ],
        pricePredictionModel: String,
        dashboardStats: {
            totalItems: Number,
            lastRestocked: Date,
        },
        deliveryRadius: {
            radiusInKm: Number,
            coordinates: {
                lat: Number,
                lng: Number,
            },
        },
        orderHistory: [{ type: mongoose.Schema.Types.ObjectId, ref: "Order" }],
    },
    { timestamps: true }
);

module.exports = mongoose.model("Supplier", supplierSchema);
