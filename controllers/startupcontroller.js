// import { User } from "../models/usermodel.js";
// import bcrypt from "bcrypt";
import { sendCookie } from "../utils/features.js";
// import ErrorHandler from "../middlewares/error.js";
import fs from "fs";
 import path from "path";
import { Startup } from "../models/startupmodel.js";
export const startupregister = async (req, res,next) => {
  try {
    const { startupname,category, title, logolink, weblink, applink, linkedinlink, facebooklink, twitterlink, email, contact } = req.body;

    const startup=await Startup.create({startupname,category,title,logolink, weblink, applink, linkedinlink, facebooklink, twitterlink, email, contact})
    
  
    const StartupName=startupname;
    const Category=category;
    const Title=title;
    const App=applink;
    const Logo=logolink;

    const newData = {
    Id:101,
     StartupName,
     Category,
     Title,
     App,
     Logo,
    }
    
    try {
      const jsonFilePath = path.resolve(
        "C:/Users/DeLL/Desktop/react-todo/react-app/src/pages/startup/mystartups.json"
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
  
    sendCookie(startup, res, "Registered Successfully", 201);
  } catch (error) {
    next(error);
  }
};