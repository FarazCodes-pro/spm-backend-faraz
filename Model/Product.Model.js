// Model/Product.Model.js
import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  brand: {
    type: String,
    required: true,
    trim: true
  },
  productName: {
    type: String,
    required: true,
    trim: true
  },
  regularPrice: {
    type: String,
    required: true,
    trim: true
  },
  salePrice: {
    type: String,
    required: true,
    trim: true
  },
  productLink: {
    type: String,
    required: true,
    trim: true,
    unique: true // Ensure no duplicate product links
  },
  imageLink: {
    type: String,
    required: true,
    trim: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
}, { timestamps: true });

const Product = mongoose.model('Product', productSchema);

export default Product;