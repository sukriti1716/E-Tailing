const mongoose=require('mongoose')

const addressSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    number:{
        type:Number,
        required:true
    },
    pincode:{
        type:Number,
        required:true
    },
    locality:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true
    }


})

const Address=mongoose.model('Address',addressSchema)

module.exports=Address