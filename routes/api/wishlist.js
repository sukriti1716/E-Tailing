const express=require('express')
const router=express.Router()
const User=require('../../models/user')
const Product=require('../../models/product')
const {isloggedin}=require('../../middlewares/productmiddleware')

router.get('/products/:productid/like',isloggedin,async (req,res)=>{
    try{
        const {productid}=req.params
        const uid=req.user.id
        console.log(productid)
    
        // getting user
        const user=await User.findById(uid)
        // getting product
        console.log(user)
        const product = await Product.findById( productid )

        //if (!product) throw new Error('No product found!');


        // if already in wishlist
        console.log(product)
        console.log(user.wishlist)
        if(user.wishlist.includes(productid)){
            // remove pid
            const indx=await req.user.wishlist.indexOf(productid)
            console.log(indx)
            if(indx!==-1){
                user.wishlist.splice(indx,1)
                await user.save()
            }
        }else{
            // adding pid to wishlist
            user.wishlist.push(productid)
            await user.save()
        }
    
        // responding json file
        res.status(200).json({
            success:true,
            msg:'Wishlist updated'
        })
        
    }catch(err){
        res.render('products/error',{err:err.message})
    }
   })

module.exports=router
