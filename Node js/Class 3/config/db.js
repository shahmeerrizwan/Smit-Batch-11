import mongoose from 'mongoose';
import { Mongo_DB_Url } from '..';

try {
    mongoose.connet(Mongo_DB_Url)
    console.log("Mongo DB Connected");
} catch (error) {
    console.log("Connection Failed");
}

export default mongoose;