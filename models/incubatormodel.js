import mongoose from "mongoose";

const schema=new mongoose.Schema({
    "incubatorname":{
        type:String,
        required:true,
    },
    "city":{
        type:String,
        required:true,
    },
    // "industries":{
    //     type: mongoose.Schema.Types.Mixed,
    //     required: true
    // },
    // "numberofInvestments":{
    //     type:Number,
    //     required:true,
    // },
    // "founders":{
    //     type: mongoose.Schema.Types.Mixed,
    //     required: true
    // },
    // "startedin":{
    //     type:String,
    //     required:true,
    // },
    "logolink":{
        type:String,
        required:true,
    },
    // "weblink":{
    //     type:String,
    //     required:true,
    // },
    // "facebooklink":{
    //     type:String,
    //     required:true,
    // },
    // "twitterlink":{
    //     type:String,
    //     required:true,
    // },
    // "email":{
    //     type:String,
    //     required:true,
    // },
    // "contact":{
    //     type:Number,
    //     required:true,
    // },

    });
    
export const Incubator=mongoose.model("Incubator",schema)