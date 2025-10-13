
import { createClient } from "redis";

const client = createClient();

client.connect();
client.on("error", function (err) {
    console.log(err);
});

async function cacheUserProfile(){
    await client.set("user:1",JSON.stringify({name:"John",age:30}));
}

async function readProfile(){
   let data = await client.get("user:1");
   return data;
}
// cacheUserProfile()
//   .then(() => {
//     console.log("User profile cached");
//   });

readProfile().then((data) => {
    console.log("User profile:", JSON.parse(data));
});
