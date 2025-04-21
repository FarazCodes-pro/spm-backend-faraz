//This file is responsibe for connecting to the database

import mongoose from "mongoose";

import dotenv from "dotenv";
dotenv.config();

const MongoURI = process.env.MONGO_URI;

//console.log(MongoURI);

const connectDB = async () => {
  try {
    await mongoose.connect(MongoURI);
    console.log("MongoDB connected successfully");
    
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1); // Exit the process with failure
    
  }
}

export default connectDB