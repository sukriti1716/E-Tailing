require('dotenv').config();
const mongoose=require('mongoose')
const Product=require('./models/product')

// 'mongodb://127.0.0.1:27017/E-commerce-1st'
mongoose.connect(process.env.DBURL)
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
            "img":"https://cdn.pixabay.com/photo/2020/10/21/18/07/laptop-5673901_1280.jpg",
            "Category":"Electronics",
            "desc":"Lenovo is a very food laptop it is up to the mark u will not feel dissatisfied from it "

        },
        {
            "name": "gaming laptop",
            "price": 70000,
            "rating": 9.5,
            "img":"https://media.istockphoto.com/id/1136599856/photo/gamepad-on-computer-keyboard-in-the-dark-video-game-controllers.jpg?s=1024x1024&w=is&k=20&c=ZJCvhKQzxBXvQ8KwjUEQuDNYcTm-495aMBCb4BRU0x4=",
            "Category":"Electronics",
            "desc": "Powerful gaming laptop with high-end graphics and fast processing speed."
        },
        {
            "name": "smartphone",
            "price": 15000,
            "rating": 9.2,
            "img":"https://media.istockphoto.com/id/1360149048/photo/a-females-hand-shows-a-smartphone-with-a-promo-code-for-a-discount-on-a-purchase-in-an-online.jpg?s=1024x1024&w=is&k=20&c=wNJn2P-TAp6D7JBAoK_gcfltSXDcmTpHyUFPQNfYwU0=",
            "Category":"Electronics",
            "desc": "The latest smartphone with advanced features and high performance."
        },
        {
            "name": "headphones",
            "price": 800,
            "rating": 8.5,
            "img":"https://media.istockphoto.com/id/1280339057/photo/young-woman-relaxing-at-home-and-listening-music.jpg?s=612x612&w=0&k=20&c=mquca3mlGfnvqEx-YoXKwMnsGIbjLtsFyO1YM1p_u9o=",
            "Category":"Electronics",
            "desc": "Comfortable headphones with excellent sound quality for an immersive experience."
        },
        {
            "name": "smartwatch",
            "price": 3000,
            "rating": 8.0,
            "img":"https://media.istockphoto.com/id/1286099765/photo/close-up-of-hand-touching-smartwatch-with-health-app-on-the-screen-gadget-for-fitness-active.jpg?s=612x612&w=0&k=20&c=T1ufyTQBhKl-VzNsJEIbgLCZSStFbldTy2RECo67Csg=",
            "Category":"Electronics",
            "desc": "Stay connected and track your fitness with this stylish smartwatch."
        },
        {
            "name": "4K TV",
            "price": 60000,
            "rating": 9.5,
            "img":"https://media.istockphoto.com/id/1408421580/photo/stylish-loft-apartment-interior-with-tennis-game-playing-on-flat-screen-television-empty.jpg?s=612x612&w=0&k=20&c=hKJnmr_6XlRK6MbQNp3ufmnJwPzLzzHxBuzEVi5EML8=",
            "Category":"Electronics",
            "desc": "Immerse yourself in stunning visuals with this high-quality 4K TV."
        },
        {
            "name": "LG TV",
            "price": 70000,
            "rating": 9.2,
            "img":"https://media.istockphoto.com/id/1332099020/photo/modern-living-room-interior-with-smart-tv-sofa-floor-lamp-and-potted-plant.jpg?s=612x612&w=0&k=20&c=j0lRO-TkQOAkXte-HBT6mnb3WfN6E2AA_Ma7e8k0dmU=",
            "Category":"Electronics",
            "desc": "This high-quality TV is best tv you can get ."
        },
        {
            "name": "wireless mouse",
            "price": 40,
            "rating": 8.2,
            "img":"https://media.istockphoto.com/id/185277608/photo/hand-with-computer-mouse.jpg?s=612x612&w=0&k=20&c=McxfhRozFC7-oG9Jzi9X5y6X8afsOOKfOIXZDx9RUXs=",
            "Category":"Electronics",
            "desc": "Ergonomic wireless mouse for smooth navigation and comfortable use."
        },
        {
            "name": "camera",
            "price": 1200,
            "rating": 9.8,
            "img":"https://media.istockphoto.com/id/172134753/photo/professional-tv-cam-3.jpg?s=612x612&w=0&k=20&c=ZXieN4JzjtlEuni8vUXs0IZo3trZ_j0hM98Ac0zNgsI=",
            "Category":"Electronics",
            "desc": "Capture breathtaking moments with this high-resolution camera."
        },
        {
            "name": "fitness tracker",
            "price": 150,
            "rating": 8.7,
            "img":"https://cdn.pixabay.com/photo/2019/12/21/10/29/fitness-band-4710206_1280.jpg",
            "Category":"Electronics",
            "desc": "Monitor your health and fitness goals with this advanced fitness tracker."
        },
        
        {
            "name": "Running Shoes",
            "price": 5000,
            "rating": 9.0,
            "img": "https://cdn.pixabay.com/photo/2016/11/19/18/06/feet-1840619_1280.jpg",
            "Category": "Shoes",
            "desc": "Lightweight running shoes designed for maximum comfort and performance."
        },
        {
            "name": "Basketball Shoes",
            "price": 7000,
            "rating": 9.5,
            "img": "https://cdn.pixabay.com/photo/2014/12/31/11/41/shoes-584850_1280.jpg",
            "Category": "Shoes",
            "desc": "High-top basketball shoes for excellent ankle support and grip on the court."
        },
        {
            "name": "Casual Sneakers",
            "price": 3000,
            "rating": 8.8,
            "img": "https://cdn.pixabay.com/photo/2023/05/29/13/10/shoes-8026038_1280.jpg",
            "Category": "Shoes",
            "desc": "Stylish casual sneakers perfect for everyday wear."
        },
        {
            "name": "Formal Shoes",
            "price": 4500,
            "rating": 8.9,
            "img": "https://cdn.pixabay.com/photo/2022/10/08/17/04/shoes-7507418_1280.jpg",
            "Category": "Shoes",
            "desc": "Elegant formal shoes crafted from high-quality leather."
        },
        {
            "name": "Hiking Boots",
            "price": 6500,
            "rating": 9.2,
            "img": "https://cdn.pixabay.com/photo/2016/09/02/11/10/boots-1638873_1280.jpg",
            "Category": "Shoes",
            "desc": "Durable hiking boots designed for rough terrains and long hikes."
        },
        {
            "name": "Sandals",
            "price": 1200,
            "rating": 8.0,
            "img": "https://cdn.pixabay.com/photo/2021/10/11/18/56/shoes-6701631_1280.jpg",
            "Category": "Shoes",
            "desc": "Comfortable sandals perfect for warm weather and casual outings."
        },
        {
            "name": "Slip-On Shoes",
            "price": 2500,
            "rating": 8.5,
            "img": "https://media.istockphoto.com/id/597954678/photo/slip-ons.jpg?s=1024x1024&w=is&k=20&c=4Zas6pSOtki9chyi--6bIb1UfFmXWTHaJQwWghk8JAM=",
            "Category": "Shoes",
            "desc": "Convenient slip-on shoes for easy wear and versatile styling."
        },
        {
            "name": "Loafers",
            "price": 3500,
            "rating": 8.7,
            "img": "https://media.istockphoto.com/id/1425137869/photo/slip-ons-of-dark-blue-color-on-female-legs-bright-blue-rubber-running-track.jpg?s=1024x1024&w=is&k=20&c=vWZQUNyJu831uOh-ZJl2-KdrBocSFlsBDoxgZkpW2Vs=",
            "Category": "Shoes",
            "desc": "Classic loafers with a modern twist, perfect for both casual and formal occasions."
        },
        {
            "name": "Tennis Shoes",
            "price": 4000,
            "rating": 9.1,
            "img": "https://media.istockphoto.com/id/1089844082/photo/close-up-of-sporty-woman-tying-shoelace-while-kneeling-outdoor-in-background-bridge-fitness.jpg?s=612x612&w=0&k=20&c=Wv91q9ihnMYw94wiR1ptwfajHYyR_y1dtUnTb6Dn5Ys=",
            "Category": "Shoes",
            "desc": "Performance-oriented tennis shoes with excellent traction and support."
        },
        {
            "name": "Flip Flops",
            "price": 800,
            "rating": 7.8,
            "img": "https://media.istockphoto.com/id/471419645/photo/red-flip-flop.jpg?s=612x612&w=0&k=20&c=v88fl7O3POVEYZU1wkQfs6wjs8V9LmqEYCttkApwX8w=",
            "Category": "Shoes",
            "desc": "Comfortable flip flops perfect for beach outings and casual wear."
        },
        {
            "name": "Casual T-Shirt",
            "price": 500,
            "rating": 8.5,
            "img": "https://cdn.pixabay.com/photo/2018/08/08/16/37/pole-3592608_1280.jpg",
            "Category": "Clothing",
            "desc": "Comfortable and stylish casual t-shirt made from soft cotton."
        },
        {
            "name": "Denim Jeans",
            "price": 1500,
            "rating": 9.0,
            "img": "https://cdn.pixabay.com/photo/2014/05/21/14/54/feet-349687_1280.jpg",
            "Category": "Clothing",
            "desc": "Durable denim jeans with a classic fit, perfect for everyday wear."
        },
        {
            "name": "Formal Shirt",
            "price": 1200,
            "rating": 8.8,
            "img": "https://cdn.pixabay.com/photo/2014/07/31/22/59/man-407095_1280.jpg",
            "Category": "Clothing",
            "desc": "Elegant formal shirt crafted from premium fabric for a sophisticated look."
        },
        {
            "name": "Hoodie",
            "price": 2000,
            "rating": 9.2,
            "img": "https://cdn.pixabay.com/photo/2022/10/28/02/20/night-7552210_1280.jpg",
            "Category": "Clothing",
            "desc": "Cozy hoodie perfect for keeping warm during cooler weather."
        },
        {
            "name": "Summer Dress",
            "price": 2500,
            "rating": 9.5,
            "img": "https://cdn.pixabay.com/photo/2016/06/16/16/17/girl-1461627_1280.jpg",
            "Category": "Clothing",
            "desc": "Lightweight and stylish summer dress ideal for sunny days."
        },
        {
            "name": "Track Pants",
            "price": 1000,
            "rating": 8.7,
            "img": "https://cdn.pixabay.com/photo/2017/08/07/16/49/male-2605630_1280.jpg",
            "Category": "Clothing",
            "desc": "Comfortable track pants perfect for workouts or lounging."
        },
        {
            "name": "Jacket",
            "price": 3500,
            "rating": 9.1,
            "img": "https://cdn.pixabay.com/photo/2016/11/29/01/34/man-1866572_1280.jpg",
            "Category": "Clothing",
            "desc": "Stylish jacket that offers both warmth and fashion-forward design."
        },
        {
            "name": "Skirt",
            "price": 1800,
            "rating": 8.9,
            "img": "https://media.istockphoto.com/id/1411357121/photo/traditional-bridal-wear-lehenga-clothes-for-indian-bride.jpg?s=1024x1024&w=is&k=20&c=-XXtzno2GF4KNFfW61ac1Y_UQbt2Zavajy0uryV2upM=",
            "Category": "Clothing",
            "desc": "Elegant skirt with a flattering fit, suitable for various occasions."
        },
        {
            "name": "Sweater",
            "price": 2200,
            "rating": 9.3,
            "img": "https://cdn.pixabay.com/photo/2017/08/06/09/12/people-2590555_1280.jpg",
            "Category": "Clothing",
            "desc": "Warm and cozy sweater perfect for layering in the winter."
        },
        {
            "name": "Shorts",
            "price": 800,
            "rating": 8.2,
            "img": "https://cdn.pixabay.com/photo/2020/08/15/08/13/female-5489902_1280.jpg",
            "Category": "Clothing",
            "desc": "Comfortable and breathable shorts ideal for casual outings."
        },
        {
            "name": "Leather Backpack",
            "price": 3000,
            "rating": 9.0,
            "img": "https://cdn.pixabay.com/photo/2016/06/27/14/25/backpack-1482612_1280.jpg",
            "Category": "Bags",
            "desc": "Stylish and durable leather backpack perfect for daily use."
        },
        {
            "name": "Tote Bag",
            "price": 1500,
            "rating": 8.7,
            "img": "https://cdn.pixabay.com/photo/2015/11/20/03/53/package-1052370_1280.jpg",
            "Category": "Bags",
            "desc": "Spacious tote bag ideal for shopping and casual outings."
        },
        {
            "name": "Messenger Bag",
            "price": 2000,
            "rating": 8.9,
            "img": "https://cdn.pixabay.com/photo/2017/10/21/06/05/bag-2873899_1280.jpg",
            "Category": "Bags",
            "desc": "Functional messenger bag with multiple compartments for easy organization."
        },
        {
            "name": "Travel Duffel Bag",
            "price": 4000,
            "rating": 9.2,
            "img": "https://cdn.pixabay.com/photo/2022/08/05/05/24/duffel-7365977_1280.jpg",
            "Category": "Bags",
            "desc": "Large travel duffel bag perfect for weekend getaways."
        },
        {
            "name": "Laptop Bag",
            "price": 2500,
            "rating": 9.1,
            "img": "https://cdn.pixabay.com/photo/2016/11/29/01/36/businessman-1866582_1280.jpg",
            "Category": "Bags",
            "desc": "Protective laptop bag with padded compartments for extra safety."
        },
        {
            "name": "Crossbody Bag",
            "price": 1200,
            "rating": 8.6,
            "img": "https://cdn.pixabay.com/photo/2017/03/15/17/53/bag-2146933_1280.jpg",
            "Category": "Bags",
            "desc": "Convenient crossbody bag for hands-free carrying."
        },
        {
            "name": "Gym Bag",
            "price": 2200,
            "rating": 8.8,
            "img": "https://th.bing.com/th/id/OIP.eYFuWXrPB46XwC55Xw0UlAHaHh?rs=1&pid=ImgDetMain",
            "Category": "Bags",
            "desc": "Spacious gym bag with multiple compartments for all your essentials."
        },
        {
            "name": "Clutch",
            "price": 1000,
            "rating": 8.4,
            "img": "https://cdn.pixabay.com/photo/2021/04/29/07/51/woman-6215886_1280.jpg",
            "Category": "Bags",
            "desc": "Elegant clutch perfect for evening events and parties."
        },
        {
            "name": "Fanny Pack",
            "price": 800,
            "rating": 8.1,
            "img": "https://media.istockphoto.com/id/1251348919/photo/blank-black-waist-bag-mockup-lying-dark-background.jpg?s=612x612&w=0&k=20&c=-MsjgfCpPMbBb8CFGn9h82F2rFJ0a_BJ4S8VJ5QwO6E=",
            "Category": "Bags",
            "desc": "Compact fanny pack ideal for festivals and outdoor activities."
        },
        {
            "name": "Briefcase",
            "price": 3500,
            "rating": 9.3,
            "img": "https://media.istockphoto.com/id/139566360/photo/business-briefcase-on-white-xxl.jpg?s=612x612&w=0&k=20&c=O2kqcf_Fx_vuNqfW02Le8sa5wJ6eJRNP6_j5dgMmxGs=",
            "Category": "Bags",
            "desc": "Professional briefcase with ample space for documents and a laptop."
        },
        {
            "name": "Facial Cleanser",
            "price": 500,
            "rating": 9.0,
            "img": "https://media.istockphoto.com/id/1285263712/photo/unrecognizable-woman-applying-beauty-product-on-cotton-pad.jpg?s=612x612&w=0&k=20&c=RwWabRGDUCYxt35dZH7WlZP_H-qIqMRQqIAw73uKSFQ=",
            "Category": "Beauty",
            "desc": "Gentle facial cleanser for all skin types."
        },
        {
            "name": "Moisturizing Cream",
            "price": 1200,
            "rating": 9.2,
            "img": "https://media.istockphoto.com/id/1192316641/photo/woman-holding-jar-of-moisturizing-cream-closeup-winter-cosmetic-space-for-text.jpg?s=612x612&w=0&k=20&c=IbWZTK_4il9ydzUcIweDUs4bhsvc2_zgqBSjmPXymPg=",
            "Category": "Beauty",
            "desc": "Hydrating moisturizing cream for daily use."
        },
        {
            "name": "Lipstick",
            "price": 800,
            "rating": 8.8,
            "img": "https://media.istockphoto.com/id/925960984/photo/air-kiss-for-you-close-up-cropped-shot-of-femenine-gorgeous-charming-adorable-lady-with.jpg?s=612x612&w=0&k=20&c=DkujblO2wtYX-JGRQPTEsU9s-LmNWW5h_vx-StTQW4E=",
            "Category": "Beauty",
            "desc": "Long-lasting lipstick available in various shades."
        },
        {
            "name": "Foundation",
            "price": 1500,
            "rating": 9.1,
            "img": "https://media.istockphoto.com/id/892006702/photo/young-woman-applying-liquid-foundation-on-her-hand.jpg?s=612x612&w=0&k=20&c=mrLNaxZVtabycHeWihuWhXQiDm66zb-t-TdVywpRIDU=",
            "Category": "Beauty",
            "desc": "Flawless finish foundation suitable for all skin tones."
        },
        {
            "name": "Eyeshadow Palette",
            "price": 1300,
            "rating": 8.9,
            "img": "https://media.istockphoto.com/id/646848242/photo/eyeshadow.jpg?s=612x612&w=0&k=20&c=ux6QdLEasfNs7xoviutpi7oZuix0U_z7_HsckQgEl-Q=",
            "Category": "Beauty",
            "desc": "Versatile eyeshadow palette with a range of colors."
        },
        {
            "name": "Mascara",
            "price": 900,
            "rating": 8.7,
            "img": "https://media.istockphoto.com/id/1397036353/photo/opened-mascara-and-brush-white-background-isolated-close-up-black-tube-eye-mascara-container.jpg?s=612x612&w=0&k=20&c=fl5AiiQUjRYl9YL8TdvVBjH9A-Xum3lgRXsfKRqUH-8=",
            "Category": "Beauty",
            "desc": "Volumizing mascara for longer and fuller lashes."
        },
        {
            "name": "Perfume",
            "price": 2000,
            "rating": 9.3,
            "img": "https://media.istockphoto.com/id/160052159/photo/perfume.jpg?s=612x612&w=0&k=20&c=n_BiZiaLtI3T5F3DmL_sGIFgIZB_wwnMvSFLfE5RgU0=",
            "Category": "Beauty",
            "desc": "Elegant fragrance with a long-lasting scent."
        },
        {
            "name": "Nail Polish",
            "price": 300,
            "rating": 8.5,
            "img": "https://media.istockphoto.com/id/1407550477/photo/overturned-bottle-with-pink-nail-polish-on-a-pink-background.jpg?s=612x612&w=0&k=20&c=4EjTUukj2B0e1wpvw4UObYHALMEGzgE8R3VpHMlCRvo=",
            "Category": "Beauty",
            "desc": "Quick-drying nail polish in various vibrant colors."
        },
        {
            "name": "Face Mask",
            "price": 700,
            "rating": 9.0,
            "img": "https://media.istockphoto.com/id/1393108496/photo/sensual-photo-of-beautiful-young-asian-woman-with-with-eyes-closed-applying-cotton-facial.jpg?s=612x612&w=0&k=20&c=5ZIDY_Pt7m9MBIcNEWJnGM7ckhKpvAtBOzKhqTlobl0=",
            "Category": "Beauty",
            "desc": "Rejuvenating face mask for glowing skin."
        },
        {
            "name": "Hair Serum",
            "price": 1100,
            "rating": 9.4,
            "img": "https://media.istockphoto.com/id/1124648928/photo/dropper-bottle-of-organic-orchid-pure-oil-on-a-white-surface-with-orchid-heads-in-the.jpg?s=612x612&w=0&k=20&c=VmQLyZihdaOhDTc9r-3BQfPhs8DdujeAB2Lg2yzApm8=",
            "Category": "Beauty",
            "desc": "Nourishing hair serum for smooth and shiny hair."
        },
        {
            "name": "Organic Apples",
            "price": 300,
            "rating": 9.5,
            "img": "https://media.istockphoto.com/id/1214421019/photo/top-view-of-red-apple-in-a-bowl-on-table.jpg?s=612x612&w=0&k=20&c=HqdEtZHLPbRzNssl6JJ5G9bGVcHeRJVTri3jxN3X9Oo=",
            "Category": "Grocery",
            "desc": "Fresh and juicy organic apples."
        },
        {
            "name": "Whole Grain Bread",
            "price": 150,
            "rating": 8.8,
            "img": "https://media.istockphoto.com/id/842797430/photo/dietary-fiber-food-still-life.jpg?s=612x612&w=0&k=20&c=bNtDUz5SNvron4jMTCirMv4hE_rXRxqDIiBVs7cNDbw=",
            "Category": "Grocery",
            "desc": "Healthy and nutritious whole grain bread."
        },
        {
            "name": "Almond Milk",
            "price": 250,
            "rating": 9.0,
            "img": "https://media.istockphoto.com/id/1163988497/photo/almond-milk-vegan-drink-peeled-and-unpeeled-almonds.jpg?s=612x612&w=0&k=20&c=xx4ZdKnkRsJ4IvjHtC3xwcKtvNxj6IXrGZNBCd_5hdE=",
            "Category": "Grocery",
            "desc": "Dairy-free and delicious almond milk."
        },
        {
            "name": "Organic Spinach",
            "price": 100,
            "rating": 8.7,
            "img": "https://media.istockphoto.com/id/522189977/photo/spinach.jpg?s=612x612&w=0&k=20&c=WnfMaNx-yOhh393DZ4lyG6tF3Hp2osD6PEmuOKsTvWs=",
            "Category": "Grocery",
            "desc": "Fresh and crisp organic spinach leaves."
        },
        {
            "name": "Brown Rice",
            "price": 200,
            "rating": 9.2,
            "img": "https://media.istockphoto.com/id/686467702/photo/brown-rice-in-bowl.jpg?s=612x612&w=0&k=20&c=JEKaNQ4tYLWQ76lUhHvHnNMSCY8rYXlhqMihNqNy_9A=",
            "Category": "Grocery",
            "desc": "Nutritious and healthy brown rice."
        },
        {
            "name": "Greek Yogurt",
            "price": 180,
            "rating": 9.3,
            "img": "https://media.istockphoto.com/id/844176590/photo/bowl-of-greek-yogurt.jpg?s=612x612&w=0&k=20&c=DZ2OhKZuoC8DbiLkcTZ78xZL_KBMAN3Xo8j_9IDrHpM=",
            "Category": "Grocery",
            "desc": "Creamy and protein-rich Greek yogurt."
        },
        {
            "name": "Honey",
            "price": 220,
            "rating": 9.1,
            "img": "https://media.istockphoto.com/id/598241944/photo/honey-in-jar-and-bunch-of-dry-lavender.jpg?s=612x612&w=0&k=20&c=gVg1BaJ78uniQbpfdFiYvMzim98gREdx-5c4ENBp2tE=",
            "Category": "Grocery",
            "desc": "Pure and natural honey."
        },
        {
            "name": "Chia Seeds",
            "price": 120,
            "rating": 8.9,
            "img": "https://media.istockphoto.com/id/886500980/photo/healthy-chia-seeds-in-a-glass-jar.jpg?s=612x612&w=0&k=20&c=YGevobKnx4oiljjuy2T4p7ELvE9XpTgqniDTfKT1ebI=",
            "Category": "Grocery",
            "desc": "High-fiber and nutrient-rich chia seeds."
        },
        {
            "name": "Organic Carrots",
            "price": 80,
            "rating": 8.5,
            "img": "https://media.istockphoto.com/id/1251268368/photo/freshly-harvested-homegrown-produce.jpg?s=612x612&w=0&k=20&c=dpPbVac9DrXm213MwAUPjzqmAg-sZQQknPQxprAdgS4=",
            "Category": "Grocery",
            "desc": "Crunchy and sweet organic carrots."
        },
        {
            "name": "Quinoa",
            "price": 300,
            "rating": 9.4,
            "img": "https://media.istockphoto.com/id/815162944/photo/quinoa-seeds.jpg?s=612x612&w=0&k=20&c=BUr4ZX6w05tOf2iljrzCpUWjMj5mkIE4G19eEcAQxLs=",
            "Category": "Grocery",
            "desc": "Gluten-free and protein-packed quinoa."
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




