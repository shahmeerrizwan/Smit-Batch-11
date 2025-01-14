import express from 'express';
import user from './users.js';
import sendEmail from './sendEmail.js';


const router = express.Router();
router.use('/auth', user);
router.use('/verification', sendEmail);


export default router;