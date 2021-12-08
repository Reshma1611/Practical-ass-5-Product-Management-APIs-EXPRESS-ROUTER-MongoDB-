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
app.get("/fetchCompanyDetailBasedProductName", async (req, res) => {
    
    const productModel = require("./schemas/productSchema"); 
    const name = req.body.productName;
    const allProduct = await productModel.find();
       
    var pid="";
    for(var i = 0; i< allProduct.length; i++)
    {
        if(allProduct[i].title === name )
        {
            pid = allProduct[i].productId;
        }
        
    }
    var flag = false;
    const companyModel = require("./schemas/companySchema"); 
    var foundCompany = [];
    const allCompany = await companyModel.find();
    if(pid != "")
    {
        for(var i = 0; i< allCompany.length; i++)
        {
            flag = false;
            const arr = allCompany[i].productIds;
            //return res.json({data: arr.length});
            arr.forEach(p => {
                if(pid === p)
                {
                    flag = true;
                    return;
                } 
            });
            if(flag)
            {
                foundCompany.push(allCompany[i]);
            }   
        }  
        return res.json({data: foundCompany});         
    }
    return res.json({data: "Not found"});
});



app.listen(port, () => console.log("Example app listing on port 5000"));

//localhost:5000/company/addNewCompany