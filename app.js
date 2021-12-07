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
app.use("/company", productRouter); 

//seller
const sellerRouter = require("./routes/sellerRoute"); 
app.use("/seller", sellerRouter); 




app.listen(port, () => console.log("Example app listing on port 5000"));

//localhost:5000/company/addNewCompany