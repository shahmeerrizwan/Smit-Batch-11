import express from 'express';
import jwt from 'jsonwebtoken';
import sendEmail from '../services/mailer.js';
import 'dotenv/config';
import User from '../model/User.js';

const router = express.Router();

const { tokenSecret } = process.env;

router.post('/sendVerificationEmail', async (req, res) => {
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
        console.log("header token ", token);
        const verified = jwt.verify(token, tokenSecret);
        console.log("id", verified.id);
        const update = await User.findByIdAndUpdate(verified.id, { verifiedEmail: true });
        console.log(update, 'Email Verified');
        res.status(200).json({ message: 'Verification successfull.' });

    } catch (error) {
        res.status(500).json({ message: 'Failed to verify email.', error: error.message });
    }

})


export default router;
