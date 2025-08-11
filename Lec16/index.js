const express = require('express');
const mongoose = require('mongoose');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/blog',(req,res)=>{
    let {title, body} = req.body;
    console.log(title, body);
    res.send("got it ")
})



app.listen(3000, () => {
    console.log(`Server is running on port 3000`);
});
mongoose.connect('mongodb://127.0.0.1:27017/g26DB')
  .then(() => console.log('Connected! 127.0.0.1:27017'));