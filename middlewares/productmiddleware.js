//middleware function to check if logged in

module.exports.isloggedin=(req,res,next)=>{
    if(req.xhr && !req.isAuthenticated()){
        return res.status(400).json({
            success:true,
            msg:'Not authorized!'
        })
    }

    if(!req.isAuthenticated()){
        req.flash('error',"Please log in")
        return res.redirect('/login')
    }
    next()
}

// can write this as 
// function isloggedin(){
//     return (req,res,next)=>{
//         if(!req.isAuthenticated()){
//             req.flash('log',"Please log in")
//             res.redirect('/login')
//         }
//     }
    
// }

// middleware function to check if seller
module.exports.isSeller=(req,res,next)=>{
    if(req.user.role!=='seller'){
        req.flash('error','Not Authorized To Perform Action')
        return res.redirect('back')
    }
    next()
}
