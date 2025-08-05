const express = require('express');
const app = express();
const fs = require('fs');

app.use(express.static(__dirname+'public'));
app.get('/users', (req, res) => {
})
app.post('/adduser', (req, res) => {
    try{
    let name = req.body.name;
    let username = req.body.username;
    let newUsers = {
        id:Math.floor(Math.random() * 1000000),
        name: name,
        username: username,
        role:"user"
    }

    let alluser = [];
    let data = fs.readFileSync('users.json', 'utf8');
    if(data){
        alluser = JSON.parse(data);
    }
    alluser.push(newUsers);
    fs.writeFileSync('users.json', JSON.stringify(alluser));
}catch(error){
    return res.send(error);
}
});


