const express = require('express');
const app = express();
const mongoose = require('mongoose');


app.get('/health', (req, res) => {
    res.json({
        status: 'ok',
        message: 'Server is running'
    });
});





mongoose.connect("mongodb://localhost:27017/blogapp")
.then(() => {
    console.log('Connected to MongoDB');
}).catch(err => {
    console.error('Error connecting to MongoDB:', err);
});

app.listen(3000,(req,res)=>{
    console.log(`Server is running on port 3000`);
});

