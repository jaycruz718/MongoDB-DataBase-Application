import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";

const signUpSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true
    },

    lastname: {
        type: String,
        required: true
    },

    email: {
        type: String, 
        required: true,
    },

    password: {
        type: String,
        required: true,
    }
}, { timestamps: true });

signUpSchema.index({ email: 1}, { unique: true });

// Collection Part
const collection = new mongoose.model("SignUp", signUpSchema);

export default collection;