const mongoose=require('mongoose')
const userSchema=new mongoose.Schema({
    google:{
       id:{
        type:String,
        required:true
       },
       name:{
        type:String,
        required:true
       },
       email:{
        type:String,
        required:true
       },
       photo:{
        type:String,
        required:true
       }
     
    }
})
const User=new mongoose.model('User',userSchema)
module.exports=User