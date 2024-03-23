const express=require('express')
const app=express();
const Product=require('./models/product')
const mongoose=require('mongoose')
const path=require('path')
const methodOverride=require('method-override')
const session=require('express-session')
const flash=require('connect-flash')
const User=require('./models/user')
const Order=require('./models/order')
// requiring passport library
const passport=require('passport')
// requiring passport-local library in which functions are passed from passport local mongoose
const LocalStrategy=require('passport-local')
// passport local

app.set('view engine','ejs')
app.set('views',path.join(__dirname,'views'))
app.use(express.static(path.join(__dirname,'public')))
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(methodOverride('_method'))

// using session middleware
// session is stateful so also keeps a check from where user has come
app.use(session({
    secret:'mysecret',
    resave:false,
    savedUninitialized:true,
}))

// initializing passport
app.use(passport.initialize())
// put session in passport 
app.use(passport.session())


// flash is a middle ware which is used to declare or create temporary variables in session
app.use(flash())

// passport is used for authentication
passport.use(new LocalStrategy(User.authenticate()))

// passport puts user in session
passport.serializeUser(User.serializeUser())
// passport removes user from session
passport.deserializeUser(User.deserializeUser())


// a middle ware function which runs for each route
// this will run before each route since its global
app.use((req,res,next)=>{
    // locals is used to pass a variable into an ejs file locals is in res object and flash is in req object
    res.locals.success=req.flash('success')
    res.locals.error=req.flash('error')
    res.locals.currUser = req.user;
    if(req.user){
        //console.log(req.user.username)
        res.locals.loggedinuser=req.user.username
        res.locals.userrole=req.user.role
        res.locals.useraddress=req.user.address
        res.locals.cartlength=req.user.cart.length
        //console.log(req.user.cart.length)
       // console.log(req.user.address)
        // console.log(req.user.username)
    }
    // res.locals.username=req.flash('username') 
    // now i can use success and error variables directly in ejs file i am getting success and error key message from flash
  //  console.log(res.locals.success)
  //  console.log(res.locals.username)
    next()
})


// connecting to mongoose database
// it returns a promise
mongoose.connect('mongodb://127.0.0.1:27017/E-commerce-1st')
    .then(()=>{
        console.log('db connected')
    })
    .catch((err)=>{
        console.log(err)
    })

app.get('/',(req,res)=>{
    res.send('working fine')
})



// router
const productRouter=require('./routes/product')
const reviewRouter=require('./routes/review')
const authenticatorRouter=require('./routes/authenticate')
const categoriesRouter=require('./routes/categories')
const wishlistRouter=require('./routes/api/wishlist')
const paymentRouter=require('./routes/api/payment')
const showwishlist=require('./routes/showWishlist')
app.use(productRouter)
app.use(reviewRouter)
app.use(authenticatorRouter)
app.use(categoriesRouter)
app.use(wishlistRouter)
app.use(paymentRouter)
app.use(showwishlist)

app.get('/home',(req,res)=>{
    res.render('products/home')
})

app.listen(4444,()=>{
    console.log('server is up at port ',4444)
})