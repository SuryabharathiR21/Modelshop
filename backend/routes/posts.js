const express = require('express');

const router=express.Router();

const Productss =require('../models/post') ;

const getAllProducts = async (req,res) => {

    try {
        const Product =await Productss.find({});

        res.json(Product);
    } catch (error) {
        console.error(error);
        res.json({message: "server error"});
    }
};
const Products =require('../models/post') ;

const getProductById = async (req,res) => {

    try {
        const product =await Products.findById(req.params.id);

        res.json(product);
    } catch (error) {
        console.error(error);
        res.json({message: "server error"});
    }
}
 module.exports ={
    getAllProducts,
     getProductById,
 };
router.get('/', getAllProducts);
router.get("./:id", getProductById);
module.exports = router;