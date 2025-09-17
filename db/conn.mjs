import mongoose, { mongo } from "mongoose";
import dotenv from 'dotenv';
dotenv.config();

const connectionStr = process.env.MongoURL || "";

async function connectDB () {
    try {
        await mongoose.connect(connectionStr);
        console.log(`MongoDB Connected...`);
    } catch (err){
        console.error(err.message);
    }

}

export default connectDB;