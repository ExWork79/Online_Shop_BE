import mongoose from "mongoose";

const url = 'mongodb://localhost:27017/shopping_cart';  // Connection URL

const connectDB = async () => {
  try {
    mongoose.connect(url).then(() => {
    console.log("Database connected!");
    })
  } catch (err) {
    console.error('Failed to connect to MongoDB', err);
  }
};

export default connectDB;