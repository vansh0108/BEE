//middleware - function which run on client request before controller functions
const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname+'public'));

app.get("/", (req, res) => {
  res.send("Welcome to the User Management API");
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});