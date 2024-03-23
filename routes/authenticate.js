const express=require('express')
const app=express()
const router=express.Router()
const User=require('../models/user')
const {validators}=require('../middlewares/validators')
const {registerSchema}=require('../validators/registerSchema')
const passport=require('passport')




router.get('/register',(req,res)=>{
    res.render('products/register')
})

router.post('/register',validators(registerSchema), async (req,res)=>{
    const {username,password,email,role}=req.body
    // creating an instance of user which has username ,role and email
    const user=new User({username,email,role})
    // here this function in passport creates a user and also does hashing of password here we pass instance of user and password which gets hashed iteslef it also send user in req body
    await User.register(user,password)
    res.render('products/login')
    
})

router.get('/login',(req,res)=>{
    res.render('products/login')
})

// here before loggin in we first authenticate through passport which checks password here we send local strategy used and of failure occurs where redirected if password correct goes to next middleware function
router.post('/login',passport.authenticate('local',{failureRedirect:'/login'}), (req,res)=>{
    req.flash('success','Logged in successfully!!')
    res.redirect('/products')
})

// logout

router.get('/logout', function(req, res, next) {
    req.logout(function(err) {
        if (err) { return next(err); }
        req.flash('success', 'Logged out successfully!!');
        res.redirect('/login');
    });
});


module.exports=router