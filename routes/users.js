import express from "express";
import { deleteUser, getUser, getUsers, updateUser } from "../controllers/user.js";
import { verifyToken } from "../utils/verifyToken.js";

const router = express.Router();
router.get("/isauthenticated", verifyToken, (req, res, next)=>{
        res.send("hello, you are logged in")
})
router.put("/:id", updateUser)
router.delete("/:id", deleteUser)
router.get("/:id", getUser)
router.get("/", getUsers)       

export default router;