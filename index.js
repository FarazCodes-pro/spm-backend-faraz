import express from "express";
import dotenv from "dotenv";
import connectDB from "./Config/db.js";
import cors from "cors";

// Import your routes
import userRoutes from "./Routes/userRote.js"; // make sure this path is correct

// Configure environment
dotenv.config();

// Connect to MongoDB
connectDB();

// App setup
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use("/api/user", userRoutes); // example: /api/user/register, /api/user/login

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
