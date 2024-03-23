// setting onclicklistener on document


document.addEventListener('click',(evt)=>{
    const element=evt.target
    if(element.classList.contains('like-btn')){
        const productid=element.getAttribute('productid')
      
        updateWhishlist(productid,element)
    }
})

async function updateWhishlist(productid,btn){
    try{
        console.log(productid,'hi')
        // calling the route using axios
        const res=await axios.get(`products/${productid}/like`,
         { headers: { 'X-Requested-With': 'XMLHttpRequest' } },)
        console.log(res)
        // if btn contains material-symbol-outlined then remove and add filled else vice wersa
        if(btn.classList.contains('fa-regular')){
            btn.classList.remove('fa-regular');
            btn.classList.add('fa-solid')
        }else{
            btn.classList.remove('fa-solid');
            btn.classList.add('fa-regular') 
        }

    }
    catch(err){
        // works same as redirect but in csr
        console.log(err.message)
       window.location.replace('/login')
    }
}