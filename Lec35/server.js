//A Message Queue allows you to send jobs (“messages”) that will be processed later
//  by a separate system (a worker).
const express = require('express');
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const {Queue} = require('bullmq');
const { Worker } = require('bullmq');

let codeQueue = new Queue('code-queue',{ // create a new message queue named 'code-queue'
    connection:{
        host:'localhost',
        port:6379,
    }
});
    

app.post("/api/submission", async function (req, res) {
    let {qId, code, language} = req.body;
    let job = await codeQueue.add('submission', { qId, code, language }); //1. Creating a new job inside the queue 2. Redis stores the job 3.  Worker will pick it later
    console.log(job.id);
    


    res.json({
        submissionId: job.id
    });
});

let worker = new Worker('code-queue',function(job){ // worker picks the job from the queue and process it
    let {qId, code, language} = job.data;
    setTimeout(()=>{
        console.log({
            qId:qId,
            status:"success",
            time: "4ms",
            beat: "top 10%"
        })
        return{
            qId:qId,
            status:"success",
            time: "4ms",
            beat: "top 10%"
        }
    },5000);

},{
    connection: {
        host: 'localhost',
        port: 6379,
    }
});

worker.on('error', err => { // error handling for the worker
    console.error(err)
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});