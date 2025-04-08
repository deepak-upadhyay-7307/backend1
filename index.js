const mongoose = require('mongoose');

main()
.then( ()  => {
    console.log("connection successful");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');

}

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number,
});

const User = mongoose.model("User" , userSchema);
//const Eployee = mongoose.model("Employee" , userSchema);

const user2 = new User ({
    name: "ankit",
    email: "ankit735953@gmail.com",
    age: 23,
});

User.findById('677df93ab55894e13d69b1fd' )
.then( (res) => {
    console.log(res);
})
.catch( (err) => {
    console.log(err)
});

/*user2
.save()
.then( (res)  => {
    console.log(res);
}).catch( (err) => {
    console.log(err);
});

User.insertMany([
    {name: "sneha" , email: "sneha79@gmail.com" , age: 20},
    {name: "pranjal" , email: "patnjali79@gmail.com" , age: 18},
    {name: "seju" , email: "dangar79@gmail.com" , age: 16},
    {name: "siddhi" , email: "kallo8844@gmail.com" , age: 13},
]).then( (result) => {
    console.log(result);
}); */
