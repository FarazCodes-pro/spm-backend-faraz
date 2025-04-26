import Product from "../Model/Product.Model.js";

export const addProduct = async (req, res) => {
  try {
    const {
      name,
      price,
      originalPrice,
      image,
      description,
      category,
      rating,
      discount,
    } = req.body;

    // Validate required fields
    if (!name || !price || !image || !description || !category) {
      return res
        .status(400)
        .json({ message: "Please fill all required fields" });
    }

    // Create a new product instance
    const newProduct = new Product({
      name,
      price,
      originalPrice,
      image,
      description,
      category,
      rating,
      discount,
    });

    // Save the product to the database
    await newProduct.save();

    res
      .status(201)
      .json({ message: "Product added successfully", product: newProduct });
  } catch (error) {
    console.error("Error adding product:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};


export const getAllProducts = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const brand = req.query.brand;
    const skip = (page - 1) * limit;

    // Build filter conditionally
    const filter = {};
    if (brand) {
      filter.brand = brand;
    }

    const total = await Product.countDocuments(filter);
    const products = await Product.find(filter).skip(skip).limit(limit);

    res.status(200).json({
      total,
      page,
      pages: Math.ceil(total / limit),
      products
    });
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};


export const getByProductId = async (req, res) => {
  try {
    const { productId } = req.params;
    const product = await Product.findById(productId);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json(product);
  } catch (error) {
    console.error("Error fetching product:", error);
    res.status(500).json({ message: "Internal server error" });
  }
}


export const getRelatedProducts = async (req, res) => {
  try {
    const { productId } = req.params;

    const currentProduct = await Product.findById(productId);

    if (!currentProduct) {
      return res.status(404).json({ message: 'Product not found' });
    }

    const relatedProducts = await Product.find({
      category: currentProduct.category,
      _id: { $ne: productId }, // exclude current product
    }).limit(4);

    res.status(200).json(relatedProducts);
  } catch (error) {
    console.error("Error fetching related products:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};