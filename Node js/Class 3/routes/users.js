import express from 'express';
import bcrypt from 'bcrypt';
import User from '../model/User.js';

const router = express.Router()

router.post("/signup", async (req, res) => {
    const data = req.body;
    const hashPassword = await bcrypt.hash(data.password, 10);
    const newUser = new User({ ...req.body, password: hashPassword })
    try {
        const saveUser = await newUser.save();
        res.send(saveUser);
    } catch (error) {
        res.send(error.message);
    }
});

router.post("/login", (req, res) => {
    const data = req.body;

})

export default router;