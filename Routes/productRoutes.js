import express from "express";
import { addProduct, getAllProducts, getByProductId, getRelatedProducts } from "../Controller/productController.js";

const router = express.Router();

// Define routes for products
router.post("/create", addProduct);
router.get("/getAll", getAllProducts);
router.get("/getProduct/:productId", getByProductId); // Assuming you want to get a product by ID
router.get("/related/:productId", getRelatedProducts);


export default router;
