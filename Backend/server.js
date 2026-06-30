import 'dotenv/config';
import express from "express";
import cors from "cors";

import connectDB from "./config/db.js";

// Routes
import foodrouter from "./routes/foodroutes.js";
import userRouter from "./routes/userRoute.js";
import cartRouter from "./routes/cartroute.js";
import OrderRouter from "./routes/orderRouter.js";

const app = express();
const port = process.env.PORT || 4000;
console.log("🔥 server.js started");
/* ======================
   Middlewares
====================== */
app.use(express.json());
app.use(cors());

/* ======================
   Static files
====================== */
app.use("/images", express.static("uploads"));

/* ======================
   Routes
====================== */
app.use("/api/food", foodrouter);
app.use("/api/user", userRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order", OrderRouter);

/* ======================
   Health Check Route
====================== */
app.get("/", (req, res) => {
  res.send("✅ API Working");
});

/* ======================
   Start Server ONLY after DB connect
====================== */
const startServer = async () => {
  try {
    await connectDB();

    app.listen(port, () => {
      console.log(`🚀 Server running on http://localhost:${port}`);
    });
  } catch (error) {
    console.error("❌ Server failed to start:", error);
    process.exit(1);
  }
};

startServer();