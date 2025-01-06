import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import 'dotenv/config'

const app = express();
app.use(express.json());
app.use(cors());
app.use(morgan('short'));


const { Port, Mongo_DB_Url } = process.env;


app.listen(Port, () => {
    console.log(`Server Started on Port ${Port}`);
});

export { Port, Mongo_DB_Url };