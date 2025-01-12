import express from 'express';
import sendEmail from '../services/mailer.js';

const router = express.Router();

router.post('/sendVerificationEmail', async (req, res) => {
    const { email, token } = req.body;

    try {
        await sendEmail(email, token);
        res.status(200).json({ message: 'Verification email sent successfully.' });
    } catch (error) {
        res.status(500).json({ message: 'Failed to send verification email.', error: error.message });
    }
});

export default router;
