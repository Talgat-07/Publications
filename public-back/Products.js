import mongoose from "mongoose";

const Products = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  averageRating: { type: Number, required: true },
  category: { type: Number, required: true },
});

export default mongoose.model("Products", Products);
