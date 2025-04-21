//script to add vast
import dotenv from 'dotenv';
import connectDB from './Config/db.js';
import Product from './Model/Product.Model.js';

dotenv.config();

// Connect to MongoDB
connectDB();

// Your product data (from frontend)
const products = [
  {
    name: 'Alkaram Embroidered Lawn Suit',
    price: 4500,
    originalPrice: 5500,
    image:'https://www.alkaramstudio.com/cdn/shop/products/FC-33O-23-CORAL-PINK-1.jpg?v=1718504871&width=720',
    description: '3-piece embroidered lawn suit with chiffon dupatta.',
    category: 'Women Clothing',
    rating: 4.6,
    discount: 18,
  },
  {
    name: 'Maria B Luxury Pret',
    price: 12000,
    originalPrice: 15000,
    image: 'https://www.mariab.pk/cdn/shop/files/Ready_to_wear_category_tile_SF_d8bd769b-aae6-4a38-95c9-81cb7d9edcd1.jpg?v=1729667826',
    description: 'Luxury chiffon embroidered dress with elegant embellishments.',
    category: 'Women Clothing',
    rating: 4.8,
    discount: 20,
  },
  {
    name: 'J. Printed Suit',
    price: 3500,
    originalPrice: 4000,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwDo5naWyMOjq1bpuioqv7AaHj3a1eQqD1Bg&s',
    description: 'Refreshing floral scent with long-lasting fragrance.',
    category: 'Women Clothing',
    rating: 4.7,
    discount: 12,
  },
  {
    name: 'Khaadi Printed Lawn Shirt',
    price: 2800,
    originalPrice: 3200,
    image: 'https://zellbury.com/cdn/shop/files/WPS2411838-1.jpg?v=1717052487',
    description: 'Printed lawn shirt with vibrant summer colors.',
    category: 'Women Clothing',
    rating: 4.5,
    discount: 13,
  },
  {
    name: 'Zellbury Casual Kurti',
    price: 2200,
    originalPrice: 2700,
    image: 'https://zellbury.com/cdn/shop/files/WPS2411838-1.jpg?v=1717052487',
    description: 'Casual wear cotton kurti with trendy prints.',
    category: 'Women Clothing',
    rating: 4.4,
    discount: 18,
  },
  {
    name: 'Alkaram Boys T-Shirt',
    price: 1500,
    originalPrice: 1800,
    image: 'https://th.bing.com/th/id/R.450d205bf74cdf17a4e2229fb5f1f88f?rik=cq4mydY3LE%2bV8Q&riu=http%3a%2f%2fwww.scrapendipity.com%2fwp-content%2fuploads%2f2018%2f08%2f543_fl.jpg&ehk=Ja2bMwnR75ekhuUNgmTerV08nxBO%2bUPnVoEo2JrQEyI%3d&risl=&pid=ImgRaw&r=0',
    description: 'Cotton round-neck t-shirt for boys with graphic print.',
    category: 'Kids Clothing',
    rating: 4.6,
    discount: 17,
  },
  {
    name: 'J. Men’s Shalwar Kameez',
    price: 5500,
    originalPrice: 6200,
    image: 'https://cdn.shopify.com/s/files/1/0551/9763/0638/products/MKS-S-8023-21_NAVY_12_41d0b813-e71a-4126-afd2-85ad64b090b0.jpg?v=1629529547',
    description: 'Elegant embroidered cotton shalwar kameez for men.',
    category: 'Men Clothing',
    rating: 4.8,
    discount: 11,
  },
  {
    name: 'Khaadi Women Stitched Suit',
    price: 8500,
    originalPrice: 9500,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdF2QaIww8fLLIJW2WMp3dA7bCJfkB6gffsA&s',
    description: '2-piece ready-to-wear embroidered lawn suit.',
    category: 'Women Clothing',
    rating: 4.7,
    discount: 10,
  },
  {
    name: 'Maria B Kids Frock',
    price: 5000,
    originalPrice: 6000,
    image: 'https://www.mariab.pk/cdn/shop/products/mks-w22-23-peach_1024x1024.jpg?v=1672342557',
    description: 'Beautiful party-wear frock for little girls.',
    category: 'Kids Clothing',
    rating: 4.9,
    discount: 17,
  },
  {
    name: 'Zellbury Men’s Polo Shirt',
    price: 2700,
    originalPrice: 3200,
    image: 'https://zellbury.com/cdn/shop/files/MPB23001-BLACK-1.jpg?v=1711537792&width=324',
    description: 'Casual wear cotton polo shirt with collar.',
    category: 'Men Clothing',
    rating: 4.5,
    discount: 15,
  }
];

// Seed the products into the database
export const seedProducts = async () => {
  try {
    await Product.deleteMany(); // optional
    const result = await Product.insertMany(products);
    console.log('✅ Products inserted successfully:', result.length);
    process.exit();
  } catch (error) {
    console.error('❌ Error inserting products:', error);
    process.exit(1);
  }
}



