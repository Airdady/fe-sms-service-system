import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      unique: true,
      required: true,
    },
    lastName: {
      type: String,
      unique: true,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    company: {
      type: String,
      required: false,
    },
    password: {
      type: String,
      required: true,
    }
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;
