const passport=require('passport')
const User=require('../model/User')
const googleStrategy=require('passport-google-oauth20').Strategy
passport.use(new googleStrategy({
    
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret:process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: '/auth/google/callback'
      
},async(accessToken,refreshToken,profile,done)=>{
    let newUser={
        google:{
            id:profile.id,
        name:profile.displayName,
        email:profile.emails[0].value,
        photo:profile.photos[0].value
        }
    }
    try{
       let user=await User.findOne({'google.id':profile.id})
       if(user){
        return done(null,user)

       }else{
       user= await User.create(newUser)
        return done(null,user)
       }
      
        console.log(profile);
     
    }catch(err){
return done(err)
    }
}
))

passport.serializeUser((user, done) => {
    done(null, user.google.id)
  })


  passport.deserializeUser(async (did, done) => {

    try {
        const user = await User.findOne({'google.id':did});
        done(null, user);
      } catch (err) {
        done(err);
      }
   
  })