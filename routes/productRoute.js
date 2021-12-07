const express = require("express");
const router = express.Router();
router.use(express.json());

const productModel = require("../schemas/productSchema"); 


router.post("/addNewProduct", (req, res) => {
    const { newProduct } = req.body;
    productModel.create(newProduct);
    return res.json({data: "product added successfully"});
    
    //type on postman > json
    /*{
        "newProduct": 
        {
            "productId": "p1",
            "title": "abc",
            "price": "120",
            "category": ["c1","c2","c3"],
            "companyId": "c1",
            "sellerIds": ["s1","s2"]
        }
    }*/    
});


module.exports = router;

