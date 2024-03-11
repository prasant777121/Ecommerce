const bcrypt = require('bcrypt');
const productModel = require('../models/productsModel');

const addproducts = async (req, res) => {
    const { name, price, category, company ,userId} = req.body;
    

        const products = await productModel.create({
            name,
            price,
            userId,
            category,
            company,
           
        });

        console.log(`products created: ${products}`);
        res.send(products)
    
};

const showproducts=async(req,res)=>{
    try {
   
        const products = await productModel.find({});
        res.send(products);
     
    } catch (error) {
        console.log(error);
    }
}
const deleteproducts=async(req,res)=>{
    // const productId=req.params.productId
    // console.log(productId)
    try {
   
        const products = await productModel.deleteOne({_id:req.params.id})
        res.send(products);
        
     
    } catch (error) {
        console.log("error got");
    }
}
const findproducts=async(req,res)=>{
    // const productId=req.params.productId
    // console.log(productId)
    try {
   
        const products = await productModel.findOne({_id:req.params.id})
        res.send(products);
        
     
    } catch (error) {
        console.log("error got");
    }
}
const updateproducts = async (req, res) => {
    try {
        // Assuming you have a request body with updated product data
        const updatedProduct = req.body;
        console.log(updatedProduct)

        // Use updateOne with filter criteria and update operation
        const result = await productModel.findOneAndUpdate({ _id: req.params.id }, { $set: updatedProduct });
       
        res.send("update")
        console.log(result);

        // Check if the update was successful
      
    } catch (error) {
        console.error("Error:", error);
        res.status(500).send({ message: 'Internal Server Error' });
    }
};

const searchproducts=async(req,res)=>{
    let result=await productModel.find({
        "$or":[
            {name:{$regex:req.params.key}},
            {company:{$regex:req.params.key}},
            {category:{$regex:req.params.key}},
            
                
            

        ]
    })
    res.send(result)
}




module.exports = { addproducts,showproducts,deleteproducts ,updateproducts,findproducts,searchproducts};
