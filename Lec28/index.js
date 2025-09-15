const {PrismaClient} = require('./generated/prisma');
const prisma = new PrismaClient();
async function addUser(email,name,password){
await prisma.user.create({
 data:{
    email:email,
    name:name,
    password:password
 }

})
}
// addUser("ritik@gmail.com","Ritik","12345").then(()=>{
//     console.log("User added");
// })

async function getAllUser(){
   let allUser =  await prisma.user.findMany();
   return allUser;
}

getAllUser().then((data)=>{
    console.log(data);
});