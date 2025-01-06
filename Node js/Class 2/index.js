import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import mongoose from 'mongoose'

const app = express();
app.use(express.json());
app.use(cors());
app.use(morgan('short'))



app.listen("3000", () => {
    console.log("Server Started");

})


mongoose.connect("")
    .then(() => { console.log("======Database Connected======") })
    .catch(() => { console.log("=====Database Connection Failed======") })



const userSchema = new mongoose.Schema({
    userName: String,
    city: { type: String, required: true, default: "Karachi" },
    email: {
        type: String,
        required: true,
        unique: true
    }
})


const user = mongoose.model("User", userSchema);

