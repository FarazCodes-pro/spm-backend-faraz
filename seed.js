// script.js
import mongoose from "mongoose";
import xlsx from "xlsx";
import path from "path";
import Product from "./Model/Product.Model.js";
import connectDB from "./Config/db.js";

const __dirname = path.resolve();

// Import data from Excel
async function importDataFromExcel() {
  try {
    // Connect to database
    await connectDB();
    console.log("✅ Database connected successfully");

    // Delete existing products
    await Product.deleteMany({});
    console.log("🗑️  All existing products deleted");

    // Define the Excel file path
    const excelFilePath = path.join(__dirname, "DataScrapped", "ConsolidatedRawData.xlsx");

    // Read Excel file
    const workbook = xlsx.readFile(excelFilePath);
    const sheetName = workbook.SheetNames[0];
    const sheet = workbook.Sheets[sheetName];

    // Convert sheet to JSON
    const data = xlsx.utils.sheet_to_json(sheet);

    console.log(`📦 Found ${data.length} products to import`);

    // Prepare products for bulk insert
    const products = data.map((item) => ({
      brand: item["Brand"],
      productName: item["Product Name"],
      regularPrice: item["Regular Price"],
      salePrice: item["Sale Price"],
      productLink: item["Product Link"],
      imageLink: item["Image Link"],
    }));

    // Insert all products
    const result = await Product.insertMany(products);
    console.log(`✅ Successfully imported ${result.length} products`);

  } catch (error) {
    console.error("❌ Error during import process:", error.message);
  } finally {
    // Close MongoDB connection
    await mongoose.connection.close();
    console.log("🔌 MongoDB connection closed");
  }
}

// Run the import function
importDataFromExcel()
  .then(() => console.log("🏁 Import script completed"))
  .catch((err) => console.error("❌ Import script error:", err));
