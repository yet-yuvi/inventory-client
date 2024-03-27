require('dotenv').config();
const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');
const productRouter = require('./routes/productRoutes');
const authRouter = require('./routes/authRoutes');
const userRouter = require('./routes/userRoutes');
const app = express();

app.use(
    cors({
        origin: 'http://localhost:5173' 
    })
);

// Parse request of content-type: application/json
app.use(bodyParser.json());

// Connect with mongoDB
connectDB();

app.use('/api', authRouter);
app.use('/api/users', userRouter);
app.use('/api', productRouter);

// Start the server
const port = process.env.PORT || 6002;
app.listen(port, () => {
    console.log(`server is running on port: ${port}`);
})