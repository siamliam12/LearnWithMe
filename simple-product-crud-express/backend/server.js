import express from 'express'
import { connectDB } from './config/db.js'
import Product from './models/product.model.js';


const app = express()
app.use(express.json())

app.post('/products',async (req,res)=>{
    const product = req.body;
    if (!product.name || !product.price || !product.image){
        return res.status(400).json({success: false, message:"Provide all required fields"})
    }
    const newProduct = new Product(product)
    try {
        await newProduct.save()
        res.status(200).json({success: true, message:"Product added successfully"})
    } catch (error) {
        console.error("Error in Product creation: ",error.message)
        res.status(500).json({success: false, message:"server Error"})
    }
})



app.listen(5000,()=>{
    connectDB()
    console.log('listening on port 5000')
})