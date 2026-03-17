const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
  
const app = express();
const PORT = process.env.PORT || 5000;
// Middleware
// Middleware
app.use(cors({
    origin: ['https://chandeep-portfolio.vercel.app', /^https:\/\/chandeep-portfolio-.*\.vercel\.app$/],
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express.json());

// Routes
// Routes
app.use('/api/contact', require('./routes/contactRoute'));

app.get('/', (req, res) => {
    res.send('Portfolio API is running...');
});

// Global Error Handler
app.use((err, req, res, next) => {
    console.error('Unhandled Error:', err);
    res.status(500).json({
        message: 'Internal Server Error',
        error: process.env.NODE_ENV === 'production' ? {} : err.message
    });
});

// Database Connection
mongoose.connect(process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/portfolio')
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));

// Start Server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
