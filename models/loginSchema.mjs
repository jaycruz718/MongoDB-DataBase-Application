
import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";

const LoginSchema = new mongoose.Schema({
    name: {
        type: String, 
        required: true,
    }, 
    password: {
        type: String, 
        required: true,
    }
});

LoginSchema.index({ name: 1}, { unique: true });

// Collection Part
const collection = new mongoose.model("users", LoginSchema);


export default mongoose.model("Login", LoginSchema);
