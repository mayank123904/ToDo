import express from "express";
import {startupregister} from "../controllers/startupcontroller.js";
// import { isAuthenticated } from "../middlewares/auth.js";

const router=express.Router();

router.post("/new",startupregister);

export default router;