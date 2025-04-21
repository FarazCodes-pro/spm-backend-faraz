import express from "express";
import { addProduct, getAllProducts, getByProductId, getRelatedProducts } from "../Controller/productController.js";

const router = express.Router();

// Define routes for products

/**
 * @swagger
 * /api/products/create:
 *   post:
 *     summary: Create a new product
 *     tags: [Products]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - description
 *               - price
 *               - originalPrice
 *               - image
 *               - category
 *               - rating
 *             properties:
 *               name:
 *                 type: string
 *               description:
 *                 type: string
 *               price:
 *                 type: number
 *               originalPrice:
 *                 type: number
 *               image:
 *                 type: string
 *               category:
 *                 type: string
 *               rating:
 *                 type: number
 *               discount:
 *                 type: number
 *     responses:
 *       201:
 *         description: Product created successfully
 *       400:
 *         description: Bad request
 *       500:
 *         description: Internal server error
 */
router.post("/create", addProduct);

/**
 * @swagger
 * /api/products/getAll:
 *   get:
 *     summary: Get all products
 *     tags: [Products]
 *     responses:
 *       200:
 *         description: A list of products
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   _id:
 *                     type: string
 *                   name:
 *                     type: string
 *                   description:
 *                     type: string
 *                   price:
 *                     type: number
 *                   originalPrice:
 *                     type: number
 *                   image:
 *                     type: string
 *                   category:
 *                     type: string
 *                   rating:
 *                     type: number
 *                   discount:
 *                     type: number
 *       500:
 *         description: Internal server error
 */
router.get("/getAll", getAllProducts);

/**
 * @swagger
 * /api/products/getProduct/{productId}:
 *   get:
 *     summary: Get a product by its ID
 *     tags: [Products]
 *     parameters:
 *       - in: path
 *         name: productId
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the product
 *     responses:
 *       200:
 *         description: A single product object
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 _id:
 *                   type: string
 *                 name:
 *                   type: string
 *                 description:
 *                   type: string
 *                 price:
 *                   type: number
 *                 originalPrice:
 *                   type: number
 *                 image:
 *                   type: string
 *                 category:
 *                   type: string
 *                 rating:
 *                   type: number
 *                 discount:
 *                   type: number
 *       404:
 *         description: Product not found
 *       500:
 *         description: Internal server error
 */
router.get("/getProduct/:productId", getByProductId);

/**
 * @swagger
 * /api/products/related/{productId}:
 *   get:
 *     summary: Get related products based on the given product ID
 *     tags: [Products]
 *     parameters:
 *       - in: path
 *         name: productId
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the product to find related products
 *     responses:
 *       200:
 *         description: A list of related products
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   _id:
 *                     type: string
 *                   name:
 *                     type: string
 *                   description:
 *                     type: string
 *                   price:
 *                     type: number
 *                   originalPrice:
 *                     type: number
 *                   image:
 *                     type: string
 *                   category:
 *                     type: string
 *                   rating:
 *                     type: number
 *                   discount:
 *                     type: number
 *       404:
 *         description: Related products not found
 *       500:
 *         description: Internal server error
 */
router.get("/related/:productId", getRelatedProducts);


export default router;
