const express=require('express')
const router=express.Router()
const Razorpay=require('razorpay')
const Order=require('../../models/order')
const {isloggedin}=require('../../middlewares/productmiddleware')
const {validatePaymentVerification}=require('razorpay/dist/utils/razorpay-utils')
const KEY_ID='rzp_test_HB3FZsyoVzVSSJ'
const KEY_SECRET='bFdqBpa2nBc7XWdRdP3pFJzW'

router.post('/orders',isloggedin,async (req,res)=>{
    try{
        // creating instance of razorpay
        const instance=new Razorpay({key_id:KEY_ID,key_secret:KEY_SECRET})
        // getting the amount posted 
        const {amount}=req.body
        // in options passing the amount
        const options={
            amount:parseInt(amount),
            currency:"INR"

        }
        // creating order from razorpay
        const order=await instance.orders.create(options);
        // creating order in database
        await Order.create({
            _id:order.id,
            amount:order.amount,
            user:req.user
        })
        console.log(order)
        // sending res as json since we are doing payment in csr
        res.status(201).json({
            success:true,
            order
        })

    }catch(error){
        console.log(error)
    }
})

// place-order
router.post('/placeOrders',isloggedin,async(req,res)=>{
    try{
            // creating instance of razorpay
        const instance=new Razorpay({key_id:KEY_ID,key_secret:KEY_SECRET})

        // getting amount
        const {amount}=req.body
        console.log(amount)

        // creation options
        const option={
            amount:parseInt(amount),
            currency:"INR"
        }

        // creating order
        const order=await instance.orders.create(option)

        // creating Order in database
        await Order.create({
            _id:order.id,
            amount:order.amount,
            user:req.user
        })

        res.status(201).json({
            success:true,
            order
        })
    }
    catch(error){
        console.log(error)
    }
})

// verification
router.post('/verify-payment',async (req,res)=>{
    const {
        razorpay_payment_id,
        razorpay_order_id,
        razorpay_signature
    }=req.body

    const isvalid=validatePaymentVerification({
        "order_id":razorpay_order_id,
        "payment_id":razorpay_payment_id
    },razorpay_signature,KEY_SECRET)

    if(!isvalid){
        res.json({
            success:false,
            msg:'payment verification failed'
        })
    }

    // updating order

    await Order.findByIdAndUpdate({_id:razorpay_order_id},{paymentStatus:true})

    res.redirect('/products')


})

module.exports=router
