import express from "express";
import {register,login, getMyProfile,logout} from "../controllers/usercontroller.js";
import { isAuthenticated } from "../middlewares/auth.js";
// import { User } from "../models/usermodel.js";

const router=express.Router();

router.post("/new",register);

router.post("/login",login);

router.get("/me",isAuthenticated,getMyProfile);

router.get("/logout",logout);
// router.put("userid/:id",updateUser);

// router.delete("userid/:id",deleteUser)

//for above 3 router i.e. userid/ we can do in following way also
// router
//    .route("/userid/:id")
//    .get(getUserId)
//    .put(updateUser)
//    .delete(deleteUser);

export default router;