require("dotenv").config(); 

const express = require("express");
const app = express();
app.use(express.json());
const port = 5000;
const mongoose = require("mongoose");

mongoose
.connect(process.env.MONGOURL)
.then(() => console.log("mongo db connected"));

//company
const comapnyRouter = require("./routes/companyRoute"); 
app.use("/company", comapnyRouter); 

//product
const productRouter = require("./routes/productRoute"); 
app.use("/product", productRouter); 

//seller
const sellerRouter = require("./routes/sellerRoute"); 
//const productModel = require("./schemas/productSchema");
app.use("/seller", sellerRouter); 
//
const companyModel = require("./schemas/companySchema"); 
const productModel = require("./schemas/productSchema"); 
const sellerModel = require("./schemas/sellerSchema"); 


//fetch company details based on product name
app.post("/fetchCompanyDetailBasedProductName", async (req, res) => {
    
    const productModel = require("./schemas/productSchema"); 
    const name = req.body.productName;
    const allProduct = await productModel.find();
    var a=0;
    

    const allCompany = await productModel.find();
    var pid;
    for(var i = 0; i< allProduct.length; i++)
    {
       
        //res.json({data: allProduct[i].title});
        if(allProduct[i].title === name )
        {
            pid = allProduct[i].productId;
        }
        
    }
    
    return res.json(pid);

    
//    return res.json({data: allProduct.length});
//    const productName = productModel.filter((p) => (p.title === name));
/*
    if(productName.length === 1)
    {
        const companyDetail = companyModel.filter((c) => 
            c.productIds.forEach(pid => {
                if(pid === p.productIds) {
                    res.json({data: pid});
                }
            })
        
        
        );
    }
*/
});



app.listen(port, () => console.log("Example app listing on port 5000"));

//localhost:5000/company/addNewCompany