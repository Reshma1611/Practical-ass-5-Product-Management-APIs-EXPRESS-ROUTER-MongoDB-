const express = require("express");
const router = express.Router();
router.use(express.json());

const sellerModel = require("../schemas/sellerSchema"); 
router.post("/addNewSeller", (req, res) => {
    const { newSeller } = req.body;
    sellerModel.create(newSeller);
    return res.json({data: "seller added successfully"});
    
    //type on postman > json
    /*{
        "newSeller": 
        {
            "sellerId": "s1",
            "name": "abc",
            "productIds": ["p1","p2","p3"]
        }
    }*/    
});
module.exports = router;

