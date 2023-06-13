import mongoose from "mongoose";

const schema=new mongoose.Schema({
    "investorname":{
        type:String,
        required:true,
    },
    "picklink":{
        type:String,
        required:true,
    },
    "categories": {
        type: mongoose.Schema.Types.Mixed,
        required: true
      },

    });
    
export const Investor=mongoose.model("Investor",schema)