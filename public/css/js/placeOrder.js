
console.log('connected')
const placeOrderButton=document.querySelector('#place-order')

placeOrderButton.addEventListener('click', async(e)=>{
    e.preventDefault()
    const amount=document.querySelector('#total-amount').innerText.split(' ').pop()
    console.log(amount)
    const cartItems = document.querySelectorAll('.card');
    const productIds = Array.from(cartItems).map(product => product.id);
    console.log(productIds);

    await placeorder(parseInt(amount), productIds);
    // await placeorder(parseInt(amount))
    //makepayment(amount*100)
})

async function placeorder(amount,productIds){
    try{
         // getting res from api
       
        const res=await axios({
            method:'post',
            url:'/placeOrders',
            data: {
                amount:amount*100,
                products: productIds // Include product IDs in the request data
            },
            headers:{'X-Requested-With': 'XMLHttpRequest'},
        })
        console.log(res)
        const  options = {
            "key": "rzp_test_bKd9OKXqInfEiI",
            "amount": amount,
            "name": "Ecommerce",
            "description": "Test Transaction",
            "image": "https://example.com/your_logo",
            "order_id": res.data.order.id, 
            "callback_url": "/verify-payment",
            "notes": {
                "address": "Razorpay Corporate Office"
            },
            "theme": {
                "color": "#3399cc"
            }
        };
        // instnace of razorpay
        var rzp1=new Razorpay(options)
        rzp1.open()

    }
    catch(error){
        console.log(error)
      //  window.location.replace('/login')
    }
    
}


