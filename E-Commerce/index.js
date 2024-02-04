const express=require('express')
const app=express();
const Product=require('./models/product')
const mongoose=require('mongoose')
const path=require('path')

app.set('view engine','ejs')
app.set('views',path.join(__dirname,'views'))

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

app.get('/products', async(req,res)=>{
    const products=await Product.find({})
    console.log(products)
    res.render('products/index',{products})
})

app.listen(4444,()=>{
    console.log('server is up at port ',4444)
})