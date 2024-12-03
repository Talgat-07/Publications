import mongoose from "mongoose";

const Comments = new mongoose.Schema({
  productId: { type: String, required: true },
  comment: { type: String, required: true },
});

export default mongoose.model("Comments", Comments);
