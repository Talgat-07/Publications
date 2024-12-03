import Router from "express";
import ProductsController from "./ProductsController.js";
import CommentsController from "./CommentsController.js";

const router = new Router();

router.post("/products", ProductsController.create);
router.get("/products", ProductsController.geAll);
router.get("/products/:id", ProductsController.getOne);
router.delete("/products/:id", ProductsController.delete);

router.post("/comments", CommentsController.create);
router.get("/comments", CommentsController.geAll);
router.delete("/comments/:id", CommentsController.delete);

export default router;
