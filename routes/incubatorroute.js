import express from "express";
import { incubatorregister } from "../controllers/incubatorcontroller.js";

const router=express.Router();
router.post("/new",incubatorregister);

export default router;