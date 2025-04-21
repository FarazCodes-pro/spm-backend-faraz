import express from 'express'
import dotenv from "dotenv";
import connectDB from './Config/db.js'

dotenv.config();
const app = express()
const PORT = process.env.PORT || 5000



connectDB()

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`)
})