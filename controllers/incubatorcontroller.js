// import { User } from "../models/usermodel.js";
// import bcrypt from "bcrypt";
import { sendCookie } from "../utils/features.js";
// import ErrorHandler from "../middlewares/error.js";
import fs from "fs";
 import path from "path";
import { Incubator} from "../models/incubatormodel.js";
export const incubatorregister = async (req, res,next) => {
  try {
    const {incubatorname,city,logolink} = req.body;

    const incubator=await Incubator.create({incubatorname,city,logolink })
  
    const Incubatorname=incubatorname;
    const Logo=logolink;
    const City=city;
    const newData = {
     Incubatorname,
     Logo,
     City,
    }
    
    try {
      const jsonFilePath = path.resolve(
        "C:/Users/DeLL/Desktop/react-todo/react-app/src/pages/incubator/myincubator.json"
      );
      let data = [];
      if (fs.existsSync(jsonFilePath)) {
        const jsonData = fs.readFileSync(jsonFilePath, 'utf8');
        if (jsonData) {
          data = JSON.parse(jsonData);
          if (!Array.isArray(data)) {
            data = [data];
          }
        }
      }
    
      data.push(newData);
      fs.writeFileSync(jsonFilePath, JSON.stringify(data));
    } catch (error) {
      console.error('Error reading or writing JSON file:', error);
      return res.status(500).json({ error: 'Internal server error' });
    }
  
    sendCookie(investor, res, "Registered Successfully", 201);
  } catch (error) {
    next(error);
  }
};