import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";


const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        console.log(`\n Database connected !! & -DB Host: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.error("MongoDB connection error:", error);
        throw error;
    }
}

export default connectDB;