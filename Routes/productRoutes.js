import express from "express";
import { addProduct, getAllProducts, getByProductId, getRelatedProducts } from "../Controller/productController.js";

const router = express.Router();

// Define routes for products

// @route   POST /create
// @desc    Add a new product
// @access  Private (requires signin)
/**
 * @swagger
 * /create:
 *   post:
 *     summary: Add a new product
 *     security:
 *       - bearerAuth: []
 *     tags:
 *       - Product
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               price:
 *                 type: number
 *               originalPrice:
 *                 type: number
 *               image:
 *                 type: string
 *               description:
 *                 type: string
 *               category:
 *                 type: string
 *               rating:
 *                 type: number
 *               discount:
 *                 type: number
 *     responses:
 *       201:
 *         description: Product added successfully
 *       400:
 *         description: Missing required fields
 *       500:
 *         description: Internal server error
 */
router.post("/create", addProduct);

// @route   GET /getAll
// @desc    Get all products (with pagination and optional brand filter)
// @access  Public
/**
 * @swagger
 * /getAll:
 *   get:
 *     summary: Get all products with pagination and optional brand filter
 *     tags:
 *       - Product
 *     parameters:
 *       - name: page
 *         in: query
 *         description: Page number (default is 1)
 *         required: false
 *         schema:
 *           type: integer
 *           default: 1
 *       - name: limit
 *         in: query
 *         description: Number of products per page (default is 10)
 *         required: false
 *         schema:
 *           type: integer
 *           default: 10
 *       - name: brand
 *         in: query
 *         description: Filter products by brand
 *         required: false
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: List of products
 *       500:
 *         description: Internal server error
 */
router.get("/getAll", getAllProducts);

// @route   GET /getProduct/:productId
// @desc    Get product details by ID
// @access  Public
/**
 * @swagger
 * /getProduct/{productId}:
 *   get:
 *     summary: Get product details by ID
 *     tags:
 *       - Product
 *     parameters:
 *       - name: productId
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *         description: Product ID
 *     responses:
 *       200:
 *         description: Product details
 *       404:
 *         description: Product not found
 *       500:
 *         description: Internal server error
 */
router.get("/getProduct/:productId", getByProductId);

// @route   GET /related/:productId
// @desc    Get related products by category
// @access  Public
/**
 * @swagger
 * /related/{productId}:
 *   get:
 *     summary: Get related products by category
 *     tags:
 *       - Product
 *     parameters:
 *       - name: productId
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *         description: Product ID
 *     responses:
 *       200:
 *         description: List of related products
 *       404:
 *         description: Product not found
 *       500:
 *         description: Internal server error
 */
router.get("/related/:productId", getRelatedProducts);


export default router;
