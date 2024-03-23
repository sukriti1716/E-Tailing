const mongoose=require('mongoose')

const ReviewSchema=mongoose.Schema({
    rating:{
        type:Number,
        min:0,
        max:5,
        default:0
    },
    comment:{
        type:String

    }
})

const Review=mongoose.model('Review',ReviewSchema)

module.exports=Review
