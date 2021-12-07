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

//fetch company detail based on product name
  
  
router.post("/fetchCompanyDetailBasedProductName", async (req, res) => {
    
    const productId = req.body.productId;
    const productName = req.body.title;


    const [companyDetail] = await companyModel.find({ productId : productId });
    const pname = product.filter((p)=> (p.title === name));
    if(pname.length === 1)
    {
        const companyid = pname[0].companyid;
        const comp = company.filter((c)=> c.companyid === companyid);
        if(comp.length === 1)
        {
            return res.json({ data:"company details",product_item:name,Company_id:companyid,Company_name:comp[0].name,Product_id:comp[0].productids});
        }

    }
    else
    {
        return res.json({ data:"No Such Company"});
    }

 /*   if(companyDetail.length === 0){
      return res.json({data: "no data found"});
    }*/
    return res.json({data: companyDetail});
});


module.exports = router;

