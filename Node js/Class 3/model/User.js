import mongoose from "mongoose";

const { Schema } = mongoose;

const userSchema = new Schema({
    userName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    verifiedEmail: { type: Boolean, default: false },
})

const User = mongoose.model("Users", userSchema);

export default User;