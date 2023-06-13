import mongoose from "mongoose";

const schema=new mongoose.Schema({
    "startupname":{
        type:String,
        required:true,
    },
    "category":{
        type:String,
        required:true,
    },
    "title":{
        type:String,
        required:true,
    },
    "logolink":{
        type:String,
        required:true,
    },
    "weblink":{
        type:String,
        required:true,
    },
    "applink":{
        type:String,
        required:true,
    },
    "linkedinlink":{
        type:String,
        required:true,
    },
    "facebooklink":{
        type:String,
        required:true,
    },
    "twitterlink":{
        type:String,
        required:true,
    },
    "email":{
        type:String,
        required:true,
    },
    "contact":{
        type:Number,
        required:true,
    },

    });
    
export const Startup=mongoose.model("Startup",schema)