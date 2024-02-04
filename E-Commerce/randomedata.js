const mongoose=require('mongoose')
const Product=require('./models/product')

mongoose.connect('mongodb://127.0.0.1:27017/E-commerce-1st')
    .then(()=>{
      addData()
        console.log('db connected')
       
    })
    .catch((err)=>{
        console.log(err)
    })

const dummydata=[
    {
        "name":"laptop",
        "price":40000,
        "rating":8.8,
        "desc":"Lenovo is a very food laptop it is up to the mark u will not feel dissatisfied from it "

    },
     {
          "name": "gaming laptop",
          "price": 70000,
          "rating": 9.5,
          "desc": "Powerful gaming laptop with high-end graphics and fast processing speed."
        }
        
]
 
async function addData() {
  try {
      await Product.deleteMany({});
      await Product.insertMany(dummydata);
      console.log('added data in product db');
  } catch (error) {
      console.error('Error inserting data:', error);
  }
}




