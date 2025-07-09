// function buyProduct(product_name,cb){
//     setTimeout(() => {
//         console.log("all the i/o is competed detail")
//         cb();
//     },0);
// }

// buyProduct("Iphone 16", function(){
//     console.log("Product bought successfully");
// });

let product = [{
    name : "samsung",
    amount : 70000,
    quantity : 10
},
{
    name: "iphone",
    amount : 100000,
    quantity : 0
}];

function buyProduct(product_name, cb) {
    let isproduct = product.filter((p) => p.name.toLowerCase() == product_name.toLowerCase())[0];
    if (!isproduct) {
        cb("Product not found", null);
        return; // Prevents calling cb twice
    }
    if (isproduct.quantity <= 0) {
        cb("Product out of stock", null);
        return;
    }
    cb(null, isproduct.amount);
}

buyProduct("samsung", function(err, amount){
    if(err) return console.log(err);;
    console.log(amount);
});