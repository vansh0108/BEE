let p = new Promise((resolve, reject) => {
   resolve("Promise resolved successfully");
});
// console.log(p);

p.then((data) => {
    console.log(data);
}).catch((err) => {
    console.log(err);
})
