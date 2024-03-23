const express=require('express')
const router=express.Router()
const Product=require('../models/product')
const Review=require('../models/review')
const User=require('../models/user')
const {isloggedin}=require('../middlewares/productmiddleware')
const Address=require('../models/address')

router.post('/products/:id/add-review',isloggedin, async (req,res)=>{
    try{
        const {id}=req.params
        const {rating,comment}=req.body
        //console.log('id',id)
        const review = await Review.create({rating,comment})
        //console.log(review)
        const product= await Product.findById(id)
        // printing users username
       // console.log(product)
        // by default review ka object push nhi krega pr review ki id push karega mongoose.type.objectid type
        product.reviews.push(review)
        // saving
        await product.save()
        // finding user which has been logged in right now
        const USER=await User.findOne({username:req.user.username})
        console.log(USER)
        // adding reviews that user has logged in
        USER.reviews.push(review)
        await USER.save()

        res.redirect('/products')
    }catch(err){
       // console.log(err)
        //renaming err.message to err
        res.render('products/error',{err:err.message})
    }
})

// posting address
router.post('/user/addaddress',async (req,res)=>{
    const {name,number,pincode,locality,address,city}=req.body
    const ADdress=await Address.create({name,number,pincode,locality,address,city})
    // finding user with username name
    const user=await User.findOne({username:name})
    user.address=ADdress
    user.save()
    res.redirect('back')
})

// adding products to cart of user
router.get('/product/:id/addToCart' ,isloggedin,async (req,res)=>{
    const {id}=req.params
    // geting that product
    const product=await Product.findById(id)
    // getting user currently logged in
    const user=await User.findOne({username:req.user.username})
    user.cart.push(product)
    await user.save()
    res.redirect('/showcart')


})

// show cart
router.get('/showcart',isloggedin,async (req,res)=>{
    // getting user of username with cart
    const user=await User.findOne({username:req.user.username}).populate('cart')
  //  console.log(user)
   // console.log(user.username)
    res.render('products/cart',{cartitems:user.cart})
})

// delete item from cart
router.get('/users/:pid/delete',isloggedin,async (req,res)=>{
    const {pid}=req.params
    // getting if of user
    const uid=req.user.id
    const user=await User.findById(uid)
    // getting first index where pid is present
    const index=req.user.cart.indexOf(pid)
    console.log(index)
    if(index!==-1){
        // removing that index
        user.cart.splice(index,1)
        await user.save()
    }
    

    res.redirect('/showcart')
})

module.exports=router