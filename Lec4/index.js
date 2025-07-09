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

// function buyProduct(product_name, cb) {
//     let isproduct = product.filter((p) => p.name == product_name)[0];
//     if (!isproduct) {
//         cb("Product not found", null);
//         return; // Prevents calling cb twice
//     }
//     if (isproduct.quantity <= 0) {
//         cb("Product out of stock", null);
//         return;
//     }
//     cb(null,isproduct.amount);
// }

let available_amount = 200000;

// function deductbankamount(amount, cb) {
//     if (amount > available_amount) {
//         return cb ("Insufficient bank balance", null);
//     }else{
//         available_amount -= amount;
//         cb(null, "amount deducted");
//         console.log("Availaible amount:",available_amount);

//     }
// }


// buyProduct("samsung", function(err, amount){
//     if(err) return console.log(err);;
//     console.log("Cost of device:",amount);
//     deductbankamount(amount, function(err, msg){
//         if(err) return console.log(err);
//         console.log(msg);
// })
// });

// Promise version of the above code
function buyProduct(product_name) {
    return new Promise((resolve, reject) => {
        let isproduct = product.filter((p) => p.name == product_name)[0];
        if (!isproduct) {
            reject("Product not found");
            return;
        }
        if (isproduct.quantity <= 0) {
            reject("Product out of stock");
            return;
        }
        resolve(isproduct.amount);
    });
}

function deductbankamount(amount) {
    return new Promise((resolve, reject) => {
        if (amount > available_amount) {
            reject("Insufficient bank balance");
        } else {
            available_amount -= amount;
            console.log("Availaible amount:", available_amount);
            resolve("amount deducted");
        }
    });
}

// Usage example:
buyProduct("samsung")
    .then(amount => {
        console.log("Cost of device:", amount);
        return deductbankamount(amount);
    })
    .then(msg => {
        console.log(msg);
    })
    .catch(err => {
        console.log(err);
    });


