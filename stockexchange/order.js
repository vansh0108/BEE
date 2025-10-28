class OrderBook{
    constructor(symbol="BTCUSD"){
        this.bids= [],
        this.ask= [],
        this._nextId= 1,
        this.lastTradedPrice=null

    }
    //helper
    _genOrderId(){
        return this._nextId++;
    }
    _sort(sides){
        if(sides==="BUY"){
            this.bids.sort((a,b)=>{
                if(a.price!=b.price){
                    return b.price - a.price;
                }
                return a.timestamp - b.timestamp;
            })
        }else{
            this.ask.sort((a,b)=>{
                if(a.price!=b.price){
                    return a.price - b.price;
                }
                return a.timestamp - b.timestamp;
            })

        }
    }
}
//if a function or variable start with (private)
//let orderbook = new OrderBook("BTCUSD")
let BTCUSDOrderBook = new OrderBook("BTCUSD");
BTCUSDOrderBook.bids.push({orderId:2,side:"BUY",type:"MARKET",price:100,quantity:10,
timestamp:Date.now(),user:"Vansh"});
BTCUSDOrderBook.bids.push({orderId:2,side:"BUY",type:"MARKET",price:99,quantity:10,
timestamp:Date.now(),user:"Sahil"});
BTCUSDOrderBook.bids.push({orderId:2,side:"BUY",type:"MARKET",price:98,quantity:10,
timestamp:Date.now(),user:"Gaurish"});

BTCUSDOrderBook._sort("BUY");
console.log(BTCUSDOrderBook.bids);