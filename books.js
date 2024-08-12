const mongoose = require('mongoose');
main()
.then(() =>{
    console.log("connection successful");
})
.catch((err) =>{
    console.log(err)
});

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/amazon');
    
}

const bookschema = new mongoose.Schema({
    name:{
        type: String,
        require:  true,
    },
    author:{
        type: String, 
    },
    cost:{
        type: Number,
    }
});

const books = mongoose.model("books",bookschema);

let book1 = new books({
    name: "Mathematicx",
    author: "RD Sharma",
    cost: 1200,
});
book1.save()
.then((res) =>{
    console.log(res);
})
.catch((err) =>{
    console.log(err);
});