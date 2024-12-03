import Comments from "./Comments.js";

class ProductsController {
  async create(req, res) {
    try {
      const { comment, productId } = req.body;
      const comments = await Comments.create({
        comment,
        productId,
      });
      res.json(comments);
    } catch (e) {
      res.status(500).json(e);
    }
  }
  async geAll(req, res) {
    try {
      const comments = await Comments.find();
      res.json(comments);
    } catch (e) {
      console.log(e);
    }
  }
  async delete(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        res.status(400).json({ message: "id not found" });
      }
      const comments = await Comments.findByIdAndDelete(id);
      res.json(comments);
    } catch (e) {
      console.log(e);
    }
  }
  async getByProductId(req, res) {
    try {
      const { id } = req.params;
      const comments = await Comments.find({ productId: id });
      res.json(comments);
    } catch (e) {
      console.error(e);
      res.status(500).json({ message: "Internal Server Error" });
    }
  }
  async deleteByProductId(req, res) {
    try {
      const { id } = req.params;
      const result = await Comments.deleteMany({ productId: id });
      res.json({ message: "Comments deleted", result });
    } catch (e) {
      console.log(e);
      res.status(500).json(e);
    }
  }
}

export default new ProductsController();
