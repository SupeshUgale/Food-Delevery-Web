import express from "express";
import { addFood, listFood, removeFood } from "../controllers/foodController.js";

const foodrouter = express.Router();

// routes
foodrouter.post("/add", addFood);
foodrouter.get("/list", listFood);
foodrouter.post("/remove", removeFood);

// export router
export default foodrouter;