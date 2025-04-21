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

/**
 * @swagger
 * /api/users/wishlist:
 *   get:
 *     summary: Get the user's wishlist
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: The user's wishlist
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
 *       401:
 *         description: Unauthorized (User not signed in)
 *       500:
 *         description: Internal server error
 */
router.get("/wishlist", requireSignin, getWishlistController);

/**
 * @swagger
 * /api/users/addtowishlist:
 *   post:
 *     summary: Add a product to the user's wishlist
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               productId:
 *                 type: string
 *     responses:
 *       200:
 *         description: Product added to wishlist successfully
 *       401:
 *         description: Unauthorized (User not signed in)
 *       500:
 *         description: Internal server error
 */
router.post("/addtowishlist", requireSignin, addToWishlistController);

/**
 * @swagger
 * /api/users/removefromwishlist/{productId}:
 *   delete:
 *     summary: Remove a product from the user's wishlist
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: productId
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the product to be removed from the wishlist
 *     responses:
 *       200:
 *         description: Product removed from wishlist successfully
 *       401:
 *         description: Unauthorized (User not signed in)
 *       404:
 *         description: Product not found in wishlist
 *       500:
 *         description: Internal server error
 */
router.delete("/removefromwishlist/:productId", requireSignin, removeFromWishlistController);

export default router;
