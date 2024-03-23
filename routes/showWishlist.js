const express=require('express')
const router=express.Router()
const Product=require('../models/product')
const User=require('../models/user')
const {isloggedin}=require('../middlewares/productmiddleware')

router.get('/showwishlist',isloggedin,async(req,res)=>{
    // getting userid
    const uid=req.user.id

    const user=await User.findById(uid).populate('wishlist')

    console.log(user)
    console.log(user.wishlist)
    res.render('products/wishlist',{products:user.wishlist})

})

module.exports=router