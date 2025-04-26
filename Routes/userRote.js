import express from "express";
import {
  addToWishlistController,
  getWishlistController,
  removeFromWishlistController,
  userLoginController,
  userRegisterController,
} from "../Controller/userController.js";
import { requireSignin } from "../middlewares/requireSignin.js";

const router = express.Router();

/**
 * @swagger
 * /api/users/register:
 *   post:
 *     summary: Register a new user
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       201:
 *         description: User successfully registered
 *       400:
 *         description: Bad request (validation errors)
 *       500:
 *         description: Internal server error
 */
router.post("/register", userRegisterController);

/**
 * @swagger
 * /api/users/login:
 *   post:
 *     summary: Login an existing user
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Successfully logged in
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 *       401:
 *         description: Unauthorized (Invalid credentials)
 *       500:
 *         description: Internal server error
 */
router.post("/login", userLoginController);

// @route   GET /wishlist
// @desc    Get user's wishlist
// @access  Private (requires signin)
/**
 * @swagger
 * /wishlist:
 *   get:
 *     summary: Get user's wishlist
 *     security:
 *       - bearerAuth: []
 *     tags:
 *       - Wishlist
 *     responses:
 *       200:
 *         description: Wishlist fetched successfully
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: User not found
 */
router.get("/wishlist", requireSignin, getWishlistController);

// @route   POST /addtowishlist
// @desc    Add product to wishlist
// @access  Private (requires signin)
/**
 * @swagger
 * /addtowishlist:
 *   post:
 *     summary: Add a product to wishlist
 *     security:
 *       - bearerAuth: []
 *     tags:
 *       - Wishlist
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               productId:
 *                 type: string
 *                 description: The ID of the product to add
 *     responses:
 *       200:
 *         description: Product added to wishlist
 *       400:
 *         description: Product already in wishlist
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: Product not found
 */
router.post("/addtowishlist", requireSignin, addToWishlistController);

// @route   DELETE /removefromwishlist/:productId
// @desc    Remove product from wishlist by wishlist item ID
// @access  Private (requires signin)
/**
 * @swagger
 * /removefromwishlist/{productId}:
 *   delete:
 *     summary: Remove a product from wishlist
 *     security:
 *       - bearerAuth: []
 *     tags:
 *       - Wishlist
 *     parameters:
 *       - name: productId
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *         description: The wishlist item's _id to remove
 *     responses:
 *       200:
 *         description: Product removed from wishlist
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: User not found
 */
router.delete("/removefromwishlist/:productId", requireSignin, removeFromWishlistController);


export default router;
