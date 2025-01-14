import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import db from './config/db.js'
import router from './routes/index.js';
import cookieParser from "cookie-parser";
import 'dotenv/config'

const app = express();

const { Port } = process.env;

app.listen(Port, () => {
    console.log(`Server Started on Port ${Port}`);
});

db.connection.once("open", () => {
    console.log("DB connected");
})


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors());
app.use(morgan('short'));
app.use("/", router);