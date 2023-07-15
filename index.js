import express from "express";
import dotenv from 'dotenv'
import mongoose from "mongoose";
import authRoute from './routes/auth.js'
import userRoute from "./routes/users.js"
import hotelRoute from "./routes/hotels.js"
import roomRoute from "./routes/rooms.js"
import cookieParser from "cookie-parser";
const app = express();
dotenv.config();

const connect = async()=>{

    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("connected to Mbd");
    } catch (error) {
        throw error;
    }
}
mongoose.connection.on("disconnected", ()=>{
    console.log("MONGO disconnected");
})
app.use(cookieParser())
app.use(express.json())
app.use("/api/auth", authRoute)
app.use("/api/user", userRoute)
app.use("/api/room", roomRoute)
app.use("/api/hotel", hotelRoute)
app.use((err,req,res,next)=>{
        const errorMessage= err.message || "something went wrong!"
        const errorStatus= err.status || 500;
        return res.status(errorStatus).json({
            success: false,
            status: errorStatus,
            message: errorMessage,
            stack: err.stack,
        })
})

app.listen(8800, ()=>{
    connect()
    console.log("Connected backend!");
})  
