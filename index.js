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

const user1 = new user({
    name: "shivam",
    email : "shivam@yahoo.com",
    age : 20,
});
user1.save();

const user2 = new user({
    name : "Draweshwar",
    email : "Draweshwar@yahoo.com",
    age : 21,
});
user2.save();

user.insertMany([
    {name: "Tony", email: "tony@gmail.com",age: 50},
    {name: "Bruce", email: "bruce@gmail.com",age: 47},
    {name: "Peter", email: "peter@gmail.com",age: 30}
]).then((data) => {
    console.log(data);
})