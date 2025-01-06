import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import db from './config/db.js'
import 'dotenv/config'
import router from './routes/index.js';

const app = express();

const { Port } = process.env;

app.listen(Port, () => {
    console.log(`Server Started on Port ${Port}`);
});

db.connection.once("open", () => {
    console.log("DB connected");
})

app.use(express.urlencoded());
app.use(express.json());
app.use(cors());
app.use(morgan('short'));
app.use("/", router);