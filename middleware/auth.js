module.exports={
    ensureAuth:(req,res,next)=>{
        
       if(req.isAuthenticated()){
        console.log(req.isAuthenticated());
        next()
       }
       else{
        res.redirect('/login')
       }
       
    }
}