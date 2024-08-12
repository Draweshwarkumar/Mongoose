// mongoosejs.com;
const mongoose = require('mongoose');
// mongoose.connect('mongodb://127.0.0.1:27017/test');

main()
.then(() =>{
    console.log("connection successful");
})
.catch((err) =>{
    console.log(err)
});

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/test');
    
}
const userSchema = new mongoose.Schema({
    name : String,
    email : String,
    age : Number,
});

const user = mongoose.model("user",userSchema);
// const employee = mongoose.model("employee",userSchema);

// const user1 = new user({
//     name: "shivam",
//     email : "shivam@yahoo.com",
//     age : 20,
// });
// user1.save();

// const user2 = new user({
//     name : "Draweshwar",
//     email : "Draweshwar@yahoo.com",
//     age : 21,
// });
// user2.save();

// user.insertMany([
//     {name: "Tony", email: "tony@gmail.com",age: 50},
//     {name: "Bruce", email: "bruce@gmail.com",age: 47},
//     {name: "Peter", email: "peter@gmail.com",age: 30}
// ]).then((data) => {
//     console.log(data);
// })

// user.find({}).then((res) =>{
//     console.log(res)
// })
// .catch((err) =>{
//     console.log(err)
// });

// user.find({age: {$gt: 30}})
// .then((res) =>{
//     console.log(res)
// })
// .catch((err) =>{
//     console.log(err)
// });

// user.updateOne({name:"Tony"},{age: "20"})
// .then((res) =>{
//     console.log(res);
// })

// user.updateMany({age: {$gt: 45}},{age:50})
// .then((res) =>{
//     console.log(res)
// });

// user.findByIdAndDelete('66b77626df2779a6092f217b').then((res) =>{
//     console.log(res);
// })

// user.deleteOne({name:"Tony"}).then((res) =>{
//     console.log(res);
// })
 
user.deleteMany({name:"Draweshwar"}).then((res) =>{
    console.log(res);
});