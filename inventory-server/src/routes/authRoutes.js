const express = require('express');

const authRouter = express.Router();

authRouter.post('/login', async(req, res) => {
    const { email, password } = req.body;
    res.json({access_token: 'dummy token'})
})

module.exports = authRouter;