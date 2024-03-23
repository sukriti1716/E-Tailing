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
        "img":"https://www.kindpng.com/picc/m/421-4212275_transparent-default-avatar-png-avatar-img-png-download.png",
        "Category":"Electronics",
        "desc":"Lenovo is a very food laptop it is up to the mark u will not feel dissatisfied from it "

    },
    {
        "name": "gaming laptop",

        "price": 70000,
        "rating": 9.5,
        "img":"https://www.kindpng.com/picc/m/421-4212275_transparent-default-avatar-png-avatar-img-png-download.png",
        "Category":"Electronics",
        "desc": "Powerful gaming laptop with high-end graphics and fast processing speed."
    },
    {
        "name": "smartphone",
        "price": 15000,
        "rating": 9.2,
        "img":"https://www.kindpng.com/picc/m/421-4212275_transparent-default-avatar-png-avatar-img-png-download.png",
        "Category":"Electronics",
        "desc": "The latest smartphone with advanced features and high performance."
    },
    {
        "name": "headphones",
        "price": 800,
        "rating": 8.5,
        "img":"https://www.kindpng.com/picc/m/421-4212275_transparent-default-avatar-png-avatar-img-png-download.png",
        "Category":"Electronics",
        "desc": "Comfortable headphones with excellent sound quality for an immersive experience."
    },
    {
        "name": "smartwatch",
        "price": 3000,
        "rating": 8.0,
        "img":"https://www.kindpng.com/picc/m/421-4212275_transparent-default-avatar-png-avatar-img-png-download.png",
        "Category":"Electronics",
        "desc": "Stay connected and track your fitness with this stylish smartwatch."
    },
    {
        "name": "4K TV",
        "price": 60000,
        "rating": 9.5,
        "img":"https://www.kindpng.com/picc/m/421-4212275_transparent-default-avatar-png-avatar-img-png-download.png",
        "Category":"Electronics",
        "desc": "Immerse yourself in stunning visuals with this high-quality 4K TV."
    },
    {
        "name": "wireless mouse",
        "price": 40,
        "rating": 8.2,
        "img":"https://www.kindpng.com/picc/m/421-4212275_transparent-default-avatar-png-avatar-img-png-download.png",
        "Category":"Electronics",
        "desc": "Ergonomic wireless mouse for smooth navigation and comfortable use."
    },
    {
        "name": "camera",
        "price": 1200,
        "rating": 9.8,
        "img":"https://www.kindpng.com/picc/m/421-4212275_transparent-default-avatar-png-avatar-img-png-download.png",
        "Category":"Electronics",
        "desc": "Capture breathtaking moments with this high-resolution camera."
    },
    {
        "name": "fitness tracker",
        "price": 150,
        "rating": 8.7,
        "img":"https://www.kindpng.com/picc/m/421-4212275_transparent-default-avatar-png-avatar-img-png-download.png",
        "Category":"Electronics",
        "desc": "Monitor your health and fitness goals with this advanced fitness tracker."
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




