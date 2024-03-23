console.log('connected')
const paymentbutton=document.querySelector('#payment-button')



paymentbutton.addEventListener('click',(e)=>{
    e.preventDefault()
    const amount=document.querySelector('#amount').innerText.split(' ').pop()
    console.log(amount)
    makepayment(amount*100)
})

 async function makepayment(amount){
    try{
         // getting res from api
        
         const res = await axios({
            method:'post',
            url: '/orders',
            data:{amount},
            headers: {'X-Requested-With': 'XMLHttpRequest'},
        })
         console.log(res)
        const  options = {
            "key": "rzp_test_8wvQsvdLHaDloc",
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
        var rzp1=new Razorpay(options)
        rzp1.open()

    }
    catch(error){
        console.log(error)
      //  window.location.replace('/login')
    }
    
}


