const mongoose=require('mongoose')
const passportlocalmongoose=require('passport-local-mongoose')
// passport-local-mongoose handles the password hashing part so we dont need to define it in schema


const userSchema=mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true
    },
    role:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    // adding reviews to user
    reviews:[{
        type:mongoose.Types.ObjectId,
        ref:'Review'
    }],
    // adding address of user
    address:{
        type:mongoose.Types.ObjectId,
        ref:'Address'
    },
    // adding cart
    cart:[{
        type:mongoose.Types.ObjectId,
        ref:'Product'
    }],
    // adding wishlist
    wishlist:[{
        type:mongoose.Types.ObjectId,
        ref:'Product'
    }]
    
})

// adding extra  functionalities of passport local mongoose into userschema
userSchema.plugin(passportlocalmongoose)

const User=mongoose.model('User',userSchema)

module.exports=User