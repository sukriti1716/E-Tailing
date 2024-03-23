const Joi=require('joi')

module.exports.validators=(schema)=>{
    // returns a middle ware function
    return (req,res,next)=>{
        // body is inside req object
        const body=req.body
        // now schema.validate function validates the schema in body according to the schema declared in productSchema
        // so this function returns two objects one if error is encountered then error is in error 
        //object and if not it is null and if validation is true means successfully validated then value contains body that is all the data
        const {error,value}=schema.validate(body)

        console.log(error)
        console.log(value)
        if(error){
            return res.render('products/error',{err:error.details[0].message})
        }
        // else no error then calls next function
        next()
    }
}