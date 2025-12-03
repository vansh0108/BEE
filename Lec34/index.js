
import { createClient } from "redis"; // allows us to create a redis client

const client = createClient();// Creates a new Redis client instance 
// it prepares the client to connect to the Redis server but does not establish the connection yet.

client.connect(); // connects the client to the Redis server

client.on("error", function (err) { 
    console.log(err);
});

async function cacheUserProfile(){ // it stores a user profile in the Redis cache
    await client.set("user:1",JSON.stringify({name:"John",age:30}));
    
}

async function readProfile(){ // it retrieves the user profile from the Redis cache
   let data = await client.get("user:1");
   return data;
}
// cacheUserProfile() // it caches the user profile
//   .then(() => {
//     console.log("User profile cached");
//   });

readProfile().then((data) => { // it reads and logs the user profile
    console.log("User profile:", JSON.parse(data));
});
