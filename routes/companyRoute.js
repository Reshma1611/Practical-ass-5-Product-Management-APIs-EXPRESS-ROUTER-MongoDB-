const express = require("express");
const router = express.Router();
router.use(express.json());

const companyModel = require("../schemas/companySchema"); 


router.post("/addNewCompany", (req, res) => {
    const { newCompany } = req.body;
    companyModel.create(newCompany);
    return res.json({data: "Company added successfully"});
    
    //type on postman > json
    /*{
        "newCompany": 
        {
            "companyId": "c1",
            "name": "abc",
            "productIds": ["1","2","3"]
        }
    }*/    
});

module.exports = router;

