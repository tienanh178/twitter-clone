import mongoose from "mongoose";

const connectMongoose = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected successfully!");
  } catch (error) {
    console.log(`Error connecting to mongoDB ${error}`);
  }
};

export default connectMongoose;
