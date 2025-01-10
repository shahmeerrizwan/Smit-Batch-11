import express from "express";
import bcrypt from "bcrypt";
import User from "../model/User.js";

const router = express.Router();

router.post("/signup", async (req, res) => {
    try {
        const data = req.body;
        if (data.password.length < 6) {
            return res.status(404).json({
                message: "Password must be at least 6 characters",
                success: false,
            });
        }

        const user = await User.findOne({ email: data.email });
        if (user) {
            return res.status(403).json({ message: "User already Registered." });
        }

        const hashPassword = await bcrypt.hash(data.password, 10);
        const newUser = new User({ ...data, password: hashPassword });
        const saveUser = await newUser.save();

        return res.status(200).json({
            message: "User created successfully",
            saveUser,
        });
    } catch (error) {
        res.status(500).json({
            message: error.message,
            error,
            success: false,
        });
    }
});

router.post("/login", async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email });
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        const isPasswordValid = await bcrypt.compare(
            req.body.password,
            user.password
        );
        if (!isPasswordValid) {
            return res.status(400).json({ message: "Invalid credentials" });
        }
        res.status(200).json({
            message: "Login successful",
            user: { email: user.email, id: user._id },
        });
    } catch (error) {
        res.status(500).json({
            message: error.message,
            error,
            success: false,
        });
    }
});

export default router;
