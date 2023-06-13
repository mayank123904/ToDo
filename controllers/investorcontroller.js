// import { User } from "../models/usermodel.js";
// import bcrypt from "bcrypt";
import { sendCookie } from "../utils/features.js";
// import ErrorHandler from "../middlewares/error.js";
import fs from "fs";
 import path from "path";
import {Investor } from "../models/investormodel.js";
export const investorregister = async (req, res,next) => {
  try {
    const { investorname,picklink,categories} = req.body;

    const investor=await Investor.create({investorname,picklink,categories})
    
  
    const InvestorName=investorname;
    const Picklink=picklink;
    const Categories=categories;

    const newData = {
     Id:29,
     InvestorName,
     Picklink,
     Categories,
    }
    
    try {
      const jsonFilePath = path.resolve(
        "C:/Users/DeLL/Desktop/react-todo/react-app/src/pages/investor/myinvestors.json"
      );
      let mydata = [];
      if (fs.existsSync(jsonFilePath)) {
        const jsonData = fs.readFileSync(jsonFilePath, 'utf8');
        if (jsonData) {
          mydata = JSON.parse(jsonData);
          if (!Array.isArray(mydata)) {
            mydata = [mydata];
          }
        }
      }
    
      mydata.push(newData);
      fs.writeFileSync(jsonFilePath, JSON.stringify(mydata));
    } catch (error) {
      console.error('Error reading or writing JSON file:', error);
      return res.status(500).json({ error: 'Internal server error' });
    }
  
    sendCookie(investor, res, "Registered Successfully", 201);
  } catch (error) {
    next(error);
  }
};