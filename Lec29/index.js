const {PrismaClient} = require('./generated/prisma');
const prisma = new PrismaClient();
async function addUser(email,name,password){
   let newUser = await prisma.user.create({
    data:{
       email:email,
       name:name,
       password:password
    }

  })
  return newUser;
}

addUser("vansh@gmail.com","vansh","12345")
.then(()=>{console.log("User added");})
