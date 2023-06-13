import express from "express";
import { investorregister } from "../controllers/investorcontroller.js";
// import { isAuthenticated } from "../middlewares/auth.js";

const router=express.Router();

router.post("/new",investorregister);

export default router;