const mongoose=require('mongoose')
const connect=()=>{
    mongoose.connect(process.env.MongoURI).then(()=>{
        console.log('Connected To DB');
    }).catch((err=>{
        console.log(err);
    }))
}
module.exports=connect