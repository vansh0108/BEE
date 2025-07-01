const fs = require('fs');
console.log("Start");
setTimeout(() => {
  console.log("Timer callback");
}, 0);
setImmediate(() => {
  console.log("Immediate callback");
});
fs.readFile("demo.txt", "utf-8", (err, data) => {
  
  console.log("poll phase callback");
  setTimeout(() => {
    console.log("Timer callback inside readFile");
  }, 0);
  setImmediate(() => {
    console.log("Immediate callback inside readFile");
  });
});
console.log("End");