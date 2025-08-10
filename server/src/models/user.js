import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, minlength: 2 },
    phone: { type: String },
    pin: {
      type: String,
      required: true,
      minlength: 4
    },
    role: {
      type: String,
      enum: ["vendor", "normal_user", "supplier", "agent"],
      required: true,
    },
    refresh_token: {
      type: String,
      select: false, // Hide from API responses
    },
    token_version: {
      type: Number,
      default: 0,
    },
    image:{
      type:String,
      required:false,
    }
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);
export default User;