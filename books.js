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
        min:[1,"please enter a valid priced"],
    },
    category :{
        type:String,
        enum:["fiction","non-fiction"]
    },
    genre: [String]
});

// const books = mongoose.model("books",bookschema);

// let book1 = new books({
//     name: "physics",
//     author: "KC sinha",
//     cost: 5,
//     category: "fiction",
//     genre:["comics","superheroes","fiction"],
// });
// book1.save()
// .then((res) =>{
//     console.log(res);
// })
// .catch((err) =>{
//     console.log(err);
// });

books.findByIdAndUpdate("66ba2b3707ecede69f94fbcf",{cost:-5},{runValidators: true})
.then((res)=>{
    console.log(res);
}).catch((err)=>{
    console.log(err);
})