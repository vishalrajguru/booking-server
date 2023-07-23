import express from "express";
import { deleteUser, getUser, getUsers, updateUser } from "../controllers/user.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();
// router.get("/isauthenticated", verifyToken, (req, res, next)=>{
//         res.send("hello, you are logged in")    
// })
// router.get("/checkuser/:id", verifyUser, (req, res, next)=>{
//         res.send("hello user , you are logged in you can delete your account")    
// })
// router.get("/isAdmin/:id", verifyAdmin, (req, res, next)=>{
//         res.send("hello admin , you are logged in you can delete all account")    
// })
router.put("/:id",verifyUser, updateUser)
router.delete("/:id",verifyUser, deleteUser)
router.get("/:id", verifyUser, getUser)
router.get("/",verifyAdmin, getUsers)       

export default router;  