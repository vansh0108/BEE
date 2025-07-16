const fs = require('fs');
let users = [
    {
        name : "Vansh",
        age : 20,
        address : "Delhi"
    },
    {
        name : "Aman",
        age : 22,
        address : "Mumbai"
    }
]
fs.writeFile('users.txt',JSON.stringify(users),function(err) {
    if (err) return console.error(err);
    console.log('done');
});