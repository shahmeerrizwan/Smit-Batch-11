import express from 'express';
import jwt from 'jsonwebtoken';
import User from '../model/User.js';
import sendEmail from '../services/mailer.js';
import 'dotenv/config';

const router = express.Router();

const { tokenSecret } = process.env;

router.post('/sendEmail', async (req, res) => {
    const { email, token } = req.body;
    try {
        await sendEmail(email, token);
        res.status(200).json({ message: 'Verification email sent successfully.' });
    } catch (error) {
        res.status(500).json({ message: 'Failed to send verification email.', error: error.message });
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