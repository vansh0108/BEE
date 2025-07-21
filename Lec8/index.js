const express = require('express');
const app = express();
const path = require('path');


app.get('/', (req, res) => {
//   res.sendFile(__dirname + '/index.html');
  res.json({
    name: 'Vansh',
    age: 20,
  })
  
});

app.listen(3000, function() {
  console.log('server started');
});
