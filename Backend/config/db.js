import mongoose from "mongoose";
import "dotenv/config";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Database Connected Successfully")
  } catch (error) {
    console.log("Database Connection Failed! Error: ", error);
    process.exit(1);
  }
};

export { connectDB };
