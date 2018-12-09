// Requires
const express = require('express');
const mongoose = require('mongoose');

// Initialize variables
const app = express();

// Database conection
mongoose.connection.openUri('mongodb://localhost:27017/hospitalDB', (error, response)=> {
    if(error) throw error;

    console.log('Database: \x1b[32m%s\x1b[0m', 'online');
});

// Routes 
app.get('/', (req, res, next) => {
    res.status(200).json({
        ok: true,
        message: 'request was successfull'
    });
});

// Listen request
app.listen(3000, ()=> {
    console.log('Express server 3000 port: \x1b[32m%s\x1b[0m', 'online');
});
