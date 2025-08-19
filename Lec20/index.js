//middleware - function which run on client request before controller functions
const express = require('express');
const { m1, m2 } = require('./middleware/firstmiddleware');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname+'/public'));
app.use(m1);
app.use(m2);

app.get("/health", (req, res) => {
  console.log("running controller");
  res.json({
    status: "ok",
    message: "Server is healthy",
  })
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});