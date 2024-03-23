const express=require('express')
const Product=require('../models/product')
// creates new router
const router=express.Router()
const {validators}=require('../middlewares/validators')
const {productSchema}=require('../validators/productSchema')
const {isSeller,isloggedin}=require('../middlewares/productmiddleware')
const User=require('../models/user')

// isloogedin and isSeller are used before edit,delet,post,new so that only when logged in they can perform such actions
// edit
router.get('/products/:id/edit',isloggedin,isSeller,async(req,res)=>{
    const {id}=req.params
    const product=await Product.findById(id)
    res.render('products/edit',{product})
})

//when click save button on edit

router.put('/products/:id',isloggedin,isSeller,async (req,res)=>{
    const {id}=req.params
    // from post request
    const {name,price,rating,desc,img,Category}=req.body
    const product=await Product.findById(id)
    if(name) product.name=name
    if(price) product.price=price
    if(img) product.img=img
    if(rating) product.rating=rating
    if(desc) product.desc=desc
    if(Category) product.Category=Category

    await product.save()

    res.redirect('/products')
     
})

// delete
router.delete('/products/:id',isloggedin,isSeller,async (req,res)=>{
    try{
        const {id}=req.params
        await Product.findByIdAndDelete(id)
        // adding success message in flash
        req.flash('success','product deleted successfully')
        res.redirect('/products')
    }catch(error){
        // adding error message in flash
        req.flash('error',error.message)
        console.log(error)
    }   
})

router.get('/products', async(req,res)=>{
    const products=await Product.find({})
    // console.log(products)
    res.render('products/index',{products})
})

// post request to add new data
// when click add button 
// before adding new data we check validation
router.post('/products',isloggedin,isSeller,validators(productSchema),async (req,res)=>{
    const {name,img,price,rating,desc,Category}=req.body
    //console.log(Category)
    await Product.create({img,name,price,rating,desc,Category})
    // adding temporary success message in flash middleware success is key
    req.flash('success','new product added')
    res.redirect('/products')
})

router.get('/products/new',isloggedin,isSeller,(req,res)=>{
    res.render('products/new')
})


// show full product by id

router.get('/products/:id',async(req,res)=>{
    const {id}=req.params
    // populate converts id to data
    const product=await Product.findById(id).populate('reviews')
    // geting array of similar products
    const similarProducts=await Product.find({Category:product.Category,_id:{$ne:id}})
    //console.log(product)
    res.render('products/show',{product,similarProducts})
})

// buynow
router.get('/products/:id/buyNow', isloggedin,async (req,res)=>{
    const {id}=req.params
    const product=await Product.findById(id)
    //const user=await User.findOne({username:req.user.username}).populate('address')
    const user=await User.findOne({username:req.user.username}).populate('address')
    //console.log(user.address.address)
   // const Useraddress=user.address
   // console.log(Useraddress)
    res.render('products/buyNow',{product,user})
})

module.exports=router

