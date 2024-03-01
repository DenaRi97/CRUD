// const mongoose = require("mongoose");
import mongoose from "mongoose";


const CategorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
  },
  { timestamps: true }
);

export default CategorySchema;

// const Category = mongoose.model("Category", CategorySchema);
// module.exports = Category