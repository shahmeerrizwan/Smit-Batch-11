import express from 'express';
import bcrypt from 'bcrypt';
import User from '../model/User.js';

const router = express.Router()

router.post("/signup", async (req, res) => {
    try {
        const data = req.body;
        if (data.password.length < 6) {
            res.status(404).json({
                message: "Password must be atlest 6 characters",
                success: false,
            });
            return;
        }
        const user = await User.findOne({ email: value.email })
        if (user) return sendResponse(res, 403, null, true, 'User already Registered.')


        const hashPassword = await bcrypt.hash(data.password, 10);
        const newUser = new User({ ...req.body, password: hashPassword })
        const saveUser = await newUser.save();
        res.status(200).json({
            message: "User created sucessfully",
            saveUser,
        });
    } catch (error) {
        res.status(500).json({
            message: error,
            error,
            success: false,
        });
    }
});

router.post("/login", (req, res) => {
    const user = User.findOne({ email: req.body.email })

    if (!user) {
        res.send("User not found");
        return;
    }


})

export default router;