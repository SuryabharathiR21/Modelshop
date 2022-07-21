const mongoose = require('mongoose');
 
const postSchema = new mongoose.Schema({
    name : String ,
    description : String,
    price: Number,
    countInStock : Number,
    imageUrl:String
 
})

const products=mongoose.model('posts',postSchema);
module.exports=products;

