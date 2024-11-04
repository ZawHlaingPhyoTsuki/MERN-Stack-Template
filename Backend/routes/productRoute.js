import express from "express";
import { createProduct, getAllProducts, getProductById } from "../controllers/productController.js";

const productRouter = express.Router();

productRouter.get("/get", getAllProducts);
productRouter.get("/:id", getProductById);
productRouter.post("/create", createProduct);

export default productRouter