import express from "express";
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken';
import User from "../model/User.js";
import sendEmail from "../services/mailer.js";
import 'dotenv/config';

const router = express.Router();
const { tokenSecret } = process.env;

router.post("/signup", async (req, res) => {
    try {
        const { userName, email, password } = req.body;

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return res.status(400).json({ message: "Invalid email format." });
        }

        if (!email || !password) {
            return res.status(400).json({ message: "Email and password are required." });
        }
        if (!userName) {
            return res.status(400).json({ message: "User Name are required." });
        }
        if (!email) {
            return res.status(400).json({ message: "Email are required." });
        }

        if (!password) {
            return res.status(400).json({ message: "Password are required." });
        }

        if (password.length < 6) {
            return res.status(400).json({
                message: "Password must be at least 6 characters.",
            });
        }

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(409).json({ message: "User already registered." });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new User({
            ...req.body,
            password: hashedPassword,
        });
        const verificationToken = jwt.sign(
            { email, userName, id: newUser.id },
            tokenSecret,
            { expiresIn: "1h" }
        );
        newUser.token = verificationToken
        const savedUser = await newUser.save();
        await sendEmail(email, verificationToken);

        return res.status(201).json({
            message: "Verification email sent successfully. Check your email.",
            verificationToken,
            user: {
                id: savedUser._id,
                email: savedUser.email,
            },
        });
    } catch (error) {
        console.error("Error during signup:", error);
        return res.status(500).json({
            message: "Internal server error.",
            error: error.message,
        });
    }
});


router.post("/login", async (req, res) => {

    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ message: "Email and password are required." });
        }

        if (!email) {
            return res.status(400).json({ message: "Email are required." });
        }

        if (!password) {
            return res.status(400).json({ message: "Password are required." });
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return res.status(400).json({ message: "Invalid email format." });
        }

        const user = await User.findOne({ email: email });
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        const isPasswordValid = await bcrypt.compare(
            password,
            user.password
        );

        if (!isPasswordValid) {
            return res.status(400).json({ message: "Wrong Password." });
        }

        delete user.password;
        const token = jwt.sign({ id: user._id, email: user.email, userName: user.userName }, tokenSecret);
        const userResponse = {
            id: user._id,
            email: user.email,
            userName: user.userName,
        };
        res.status(200).json({
            message: "Login successful.",
            user: userResponse,
            token: token
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
