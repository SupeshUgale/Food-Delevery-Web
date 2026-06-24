import Food from "../models/foodModel.js";
import fs from "fs";

// Add a new food item
const addFood = async (req, res) => {
  try {
    const image_filename = req.file ? req.file.filename : "";

    const food = new Food({
      name: req.body.name,
      description: req.body.description,
      price: req.body.price,
      image: image_filename,
      category: req.body.category,
    });

    await food.save();
    res.json({ success: true, message: "Food added successfully" });
  } catch (error) {
    console.error(error);
    res.json({ success: false, message: "Error adding food" });
  }
};

// Get all food items
const listFood = async (req, res) => {
  try {
    const foods = await Food.find({});
    res.json({ success: true, data: foods });
  } catch (error) {
    console.error(error);
    res.json({ success: false, message: "Error fetching food list" });
  }
};

// Remove a food item
const removeFood = async (req, res) => {
  try {
    const food = await Food.findById(req.body.id);
    if (!food) {
      return res.json({ success: false, message: "Food not found" });
    }

    // Delete image from uploads folder if it exists
    if (food.image) {
      const imagePath = `uploads/${food.image}`;
      if (fs.existsSync(imagePath)) {
        fs.unlink(imagePath, (err) => {
          if (err) console.error("Error deleting image:", err);
        });
      }
    }

    await Food.findByIdAndDelete(req.body.id);
    res.json({ success: true, message: "Food removed successfully" });
  } catch (error) {
    console.error(error);
    res.json({ success: false, message: "Error removing food" });
  }
};

export { addFood, listFood, removeFood };
