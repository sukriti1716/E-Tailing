const Joi=require('joi')
// this joi is a library which does schema validation

// sending a object with key name productSchema
module.exports.productSchema=Joi.object({
    name:Joi.string().required().trim().min(1).max(30),
    price:Joi.number().required().min(0).max(200000),
    desc:Joi.string().max(800).required(),
    img:Joi.string().required(),
    rating:Joi.number(),
    Category:Joi.string()
})

// this returns a schema's object 