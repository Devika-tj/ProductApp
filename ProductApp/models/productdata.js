const mongoose=require('mongoose')
const productSchema=new mongoose.Schema({
    title:{type:String,required:true},
    description:String,
    status:String,
    image:String,
});


module.exports=mongoose.model('products',productSchema)