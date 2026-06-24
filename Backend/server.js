import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import connectDB from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Serve uploaded images as static files
app.use("/images", express.static("uploads"));

// Connect to Database
connectDB();

// Routes
app.use("/api/food", foodRouter);
app.use("/image", express.static('uploads'))

// Health check route
app.get("/", (req, res) => {
  res.send("Food Delivery API Running...");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});