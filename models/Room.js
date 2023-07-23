import mongoose from 'mongoose';
import { Schema } from "mongoose";
const RoomSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    maxPeople: {
        type: Number,
        required: true
    },
    distance: {
        type: String,
        required: true
    },
    roomNumbers: [{number: Number, unavailableDates: {type: [Date]}}],
    

})
export default mongoose.model("Room", RoomSchema)