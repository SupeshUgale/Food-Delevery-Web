import foodModel from "../models/foodModel.js";

/* =========================
   ADD FOOD
========================= */
const addFood = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "Image is required",
      });
    }

    const image_filename = req.file.filename;

    const food = new foodModel({
      name: req.body.name,
      description: req.body.description,
      price: req.body.price,
      category: req.body.category,
      image: image_filename,
    });

    await food.save();

    res.status(200).json({
      success: true,
      message: "Food Added Successfully",
    });
  } catch (error) {
    console.log("Add Food Error:", error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

/* =========================
   LIST FOOD
========================= */
const listFood = async (req, res) => {
  try {
    const foods = await foodModel.find();

    res.status(200).json({
      success: true,
      data: foods,
    });
  } catch (error) {
    console.log("List Food Error:", error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

/* =========================
   REMOVE FOOD
========================= */
const removeFood = async (req, res) => {
  try {
    const { id } = req.body;

    await foodModel.findByIdAndDelete(id);

    res.status(200).json({
      success: true,
      message: "Food Removed Successfully",
    });
  } catch (error) {
    console.log("Remove Food Error:", error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

/* =========================
   EXPORT ALL
========================= */
export {
  addFood,
  listFood,
  removeFood,
};