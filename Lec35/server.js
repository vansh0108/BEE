const express = require('express');
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.post("/api/submission", function (req, res) {
    let {qId,code,language}=req.body;

    //offload the job to message queue, so that a worker can do the task
    res.json({

    });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});