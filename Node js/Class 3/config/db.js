import mongoose from 'mongoose';
import 'dotenv/config'

const { Mongo_DB_Url } = process.env;

mongoose.connect(Mongo_DB_Url, {
}).then(() => {
    console.log("MongoDB connected successfully!");
}).catch((err) => {
    console.error("MongoDB connection Failed");
});

export default mongoose;