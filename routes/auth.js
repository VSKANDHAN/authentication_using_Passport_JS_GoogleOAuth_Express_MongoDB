const router=require('express').Router()
const passport=require('passport')
router.get('/google', passport.authenticate('google', { scope: ['profile','email'] }))
router.get('/google/callback', passport.authenticate('google', { failureRedirect: '/' }),(req,res)=>{
    console.log(req.user);
      res.send(`<div style="width:60%;border-radius:10px;text-align:center;padding:20px;margin:auto;background-color:#86cdc7;color:white"><img style="width:90px;height:90px;border-radius:50%"src="${req.user.google.photo}"><br><h1>Welcome In ${req.user.google.name}</h1><h2>Email: ${req.user.google.email}</h2><br><a style="background-color:crimson;color:white;text-decoration:none;padding:12px;border-radius:10px"href="http://localhost:5000/auth/logout">Logout </a></div>`)
})
router.get('/logout',(req,res)=>{
    req.logout((err)=>{
if(err){
    console.log(err);
}
else{
    res.redirect('/login')

}
    })
  
})
module.exports=router