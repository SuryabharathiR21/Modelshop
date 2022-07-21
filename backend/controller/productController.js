const { model } = require('mongoose');
const productss =require('../models/post') ;

const getAllProducts = async (req,res) => {

    try {
        const Products =await productss.find({});

        res.json(Products);
    } catch (error) {
        console.error(error);
        res.json({message: "server error"});
    }
}

const products =require('../models/post') ;

const getProductById = async (req,res) => {

    try {
        const Product =await productss.findById(req.params.id);

        res.json(Product);
    } catch (error) {
        console.error(error);
        res.json({message: "server error"});
    }
}
module.export ={
    getAllProducts,
    getProductById,
};

