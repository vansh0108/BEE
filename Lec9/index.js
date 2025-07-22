const express = require('express');
const app = express();


app.use(express.json()); 

app.get('/',(req,res)=>{
    res.send("Hello World");
})



//Post request with callback
app.post('/senddata', function(req, res) {
    const { name, email } = req.body; 
    res.json({ name, email });        
});


app.listen(3000, function() {   
    console.log('server started');
});
