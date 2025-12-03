const User=require("./model/user.model");
const mongoose=require("mongoose");
let{MongoMemoryServer}=require("mongodb-memory-server");

let mongoServer;

beforeAll(async()=>{
    mongoServer=await MongoMemoryServer.create();
    const uri=mongoServer.getUri();
    await mongoose.connect(uri);
});
afterEach(async()=>{
    await User.deleteMany();
});
afterAll(async()=>{
    await mongoose.disconnect();
    mongoServer.stop();
});