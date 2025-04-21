import express from 'express'
import { addToWishlistController, getWishlistController, removeFromWishlistController, userLoginController, userRegisterController } from '../Controller/userController.js'
import { requireSignin } from '../middlewares/requireSignin.js'

const router = express.Router()

router.post('/register', userRegisterController)
router.post('/login', userLoginController)

router.get('/wishlist',requireSignin, getWishlistController)
router.post('/addtowishlist',requireSignin, addToWishlistController) 
router.delete('/removefromwishlist/:productId',requireSignin, removeFromWishlistController)
export default router