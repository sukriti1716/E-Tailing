const express=require('express')
const router=express.Router()
const Product=require('../models/product')

// category clothing
router.get('/clothing',async (req,res)=>{
    const products=await Product.find({Category:'Clothing'})
    res.render('products/categories',{products})
})

// category shoes
router.get('/shoes',async (req,res)=>{
    const products=await Product.find({Category:'Shoes'})
    res.render('products/categories',{products})
})

// category electronics
router.get('/electronics',async (req,res)=>{
    const products=await Product.find({Category:'Electronics'})
    res.render('products/categories',{products})
})

// category bags
router.get('/bags',async (req,res)=>{
    const products=await Product.find({Category:'Bags'})
    res.render('products/categories',{products})
})

// category beauty
router.get('/beauty',async (req,res)=>{
    const products=await Product.find({Category:'Beauty'})  
    res.render('products/categories',{products})
})

// category grocery
router.get('/grocery',async (req,res)=>{
    const products=await Product.find({Category:'Grocery'})
    res.render('products/categories',{products})
})



module.exports=router