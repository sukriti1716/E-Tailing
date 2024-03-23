const mongoose=require('mongoose')

const productSchema=mongoose.Schema({
    name:{
       type:String,
       required:true,
       trim:true 
    },
    img:{
        type:String,
        default:'https://www.kindpng.com/picc/m/421-4212275_transparent-default-avatar-png-avatar-img-png-download.png'
    },
    price:{
        type:Number,
        required:true,
        min:0
    },
    rating:{
        type:Number,
        min:0,
        max:10
    },
    desc:{
        type:String
    },
    Category:{
        type:String
      
    },
    reviews:[{
        type:mongoose.Types.ObjectId,
        ref:'Review'
    }]
    

})

// we create an instance pointing towards product database whith this schema
const Product=mongoose.model('Product',productSchema)

// so that we can use it somewhere else too
module.exports=Product;