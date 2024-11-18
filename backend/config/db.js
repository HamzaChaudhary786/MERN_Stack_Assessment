import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI); // No options needed for MongoDB Driver 4.0+
        console.log('MongoDB connected');
    } catch (error) {
        console.error(error.message);
        process.exit(1);
    }
};
