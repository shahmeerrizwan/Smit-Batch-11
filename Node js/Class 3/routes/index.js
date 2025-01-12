import express from 'express';
import user from './users.js';
import sendEmail from './sendEmail.js';


const router = express.Router();
router.use('/user', user);
router.use('/auth', sendEmail);


export default router;