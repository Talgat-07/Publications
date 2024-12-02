import Products from "./Products.js";

class ProductsController {
  async create(req, res) {
    try {
      const { name, description, averageRating, category } = req.body;
      const products = await Products.create({
        name,
        description,
        averageRating,
        category,
      });
      res.json(products);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async geAll(req, res) {
    try {
      const products = await Products.find();
      res.json(products);
    } catch (e) {
      console.log(e);
    }
  }

  async getOne(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        res.status(400).json({ message: "id not found" });
      }
      const product = await Products.findById(id);
      res.json(product);
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
      const product = await Products.findByIdAndDelete(id);
      res.json(product);
    } catch (e) {
      console.log(e);
    }
  }
}

export default new ProductsController();
