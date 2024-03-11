const express = require("express");
const productController = require("../controllers/productController");

const router = express.Router();

router.post("/addproducts",productController.addproducts);
router.get("/showproducts",productController.showproducts);
router.delete('/deleteproducts/:id',productController.deleteproducts); 
router.get("/findproducts/:id",productController.findproducts);
router.put('/updateproducts/:id',productController.updateproducts); 
router.get('/searchproducts/:key',productController.searchproducts);




module.exports = router;