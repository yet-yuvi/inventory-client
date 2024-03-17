require('dotenv').config();
const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');
const productRouter = require('./routes/productRoutes');
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

app.use('/api', productRouter);

// Routes
// app.use('/api/users', require('./routes/api/users'));
// app.use('/api/products', require('./routes/api/products'));
// app.use('/api/orders', require('./routes/api/orders'));

// Define a simple rout
// app.get('/', (req, res) => {
    // res.json({message: 'welcome to my application'});
// })



// Start the server
const port = process.env.PORT || 6002;
app.listen(port, () => {
    console.log(`server is running on port: ${port}`);
})