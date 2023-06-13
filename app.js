import express from "express";
import userRouter from "./routes/userroute.js";
// import taskRouter from "./routes/taskroute.js";
import startupRouter from "./routes/startuproute.js";
import investorRouter from "./routes/investorroute.js";
import incubatorRouter from "./routes/incubatorroute.js";
import { config } from "dotenv";
import cookieParser from "cookie-parser";
import { errorMiddleware } from "./middlewares/error.js";
import cors from "cors";
import { Incubator } from "./models/incubatormodel.js";

export const app=express();

config({
  path:"./database/config.env",
});

//using middlewares
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin:[process.env.FRONTEND_URL],
    methods:["GET","POST","PUT","DELETE"],
    credentials:true,
  })
);

//using routesz
app.use("/api/v1/users",userRouter);
app.use("/api/v1/startup",startupRouter);
app.use("/api/v1/investor",investorRouter);
app.use("/api/v1/incubator",incubatorRouter);
app.get("/",(req,res)=>{
res.send("Welcome");
// app.get('/api/v1/check-auth', (req, res) => {
//   // Check if the user is authenticated
//   if (req.isAuthenticated()) {
//     // User is authenticated
//     res.json({ isAuthenticated: true });
//   } else {
//     // User is not authenticated
//     res.json({ isAuthenticated: false });
//   }
// });
});




// Using error Middleware
app.use(errorMiddleware);