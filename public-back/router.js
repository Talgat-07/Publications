import Router from "express";
import ProductsController from "./ProductsController.js";

const router = new Router();

router.post("/products", ProductsController.create);

router.get("/products", ProductsController.geAll);
router.get("/products/:id", ProductsController.getOne);
router.delete("/products/:id", ProductsController.delete);

export default router;
