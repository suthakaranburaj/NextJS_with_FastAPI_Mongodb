import mongoose from "mongoose";

const agentSchema = new mongoose.Schema(
    {
        userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
        verifiedSuppliers: [
            {
                supplierId: { type: mongoose.Schema.Types.ObjectId, ref: "Supplier" },
                verificationDate: Date,
                status: { type: String, enum: ["approved", "rejected", "pending"] },
            },
        ],
    },
    { timestamps: true }
);

const Agent = mongoose.model("Agent", userSchema);
export default Agent;