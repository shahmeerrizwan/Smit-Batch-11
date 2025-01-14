import express from 'express';
import jwt from 'jsonwebtoken';
import User from '../model/User.js';
import sendEmail from '../services/mailer.js';
import 'dotenv/config';

const router = express.Router();

const { tokenSecret } = process.env;

router.post("/sendEmail", async (req, res) => {
    const { email } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: "User not found." });
        }

        if (user.verifiedEmail) {
            return res.status(400).json({ message: "Email already verified." });
        }

        const token = jwt.sign({ id: user._id, email: user.email }, tokenSecret, { expiresIn: "1h" });
        await sendEmail(email, token);

        res.status(200).json({ message: "Verification email resent successfully." });
    } catch (error) {
        res.status(500).json({ message: "Failed to resend verification email.", error: error.message });
    }
});


router.post('/verifyEmail', async (req, res) => {
    try {
        const { token } = req.headers;
        const verified = jwt.verify(token, tokenSecret);
        await User.findByIdAndUpdate(verified.id, { verifiedEmail: true });
        res.status(200).json({ message: 'Verification successfull.' });
    } catch (error) {
        res.status(500).json({ message: 'Failed to verify email.', error: error.message });
    }
})

export default router;