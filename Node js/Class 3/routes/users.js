import express from 'express';

const router = express.Router()

router.post("/signup", (req, res) => {
    const data = req.body;
    console.log("data ===> ", data);
    res.send({ message: 'User Created', data });
})

router.post("/login", (req, res) => {
    const data = req.body;
    console.log("data ===> ", data);
    res.send({ message: 'User Created', data });
})

export default router;