import mongoose from "mongoose";

export const connectDB=()=>{
    mongoose
    .connect(process.env.DB_URI, {
      dbName: "Backendapi",
    })
    .then(() => console.log("Database Connected"))
    .catch((e) => console.log(e));
  
};