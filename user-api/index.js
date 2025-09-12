const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

const users = [
  { name: "carlos", profilePicture: "https://cdn2.thecatapi.com/images/DBmIBhhyv.jpg", country: "mexico", age: 38, gender: "male" },
  { name: "mahdia", profilePicture: "https://cdn2.thecatapi.com/images/FCNqMC83P.jpg", country: "Afghanistan", age: 22, gender: "female" },
  { name: "carlos", profilePicture: "https://cdn2.thecatapi.com/images/DBmIBhhyv.jpg", country: "mexico", age: 38, gender: "male" },
  { name: "mahdia", profilePicture: "https://cdn2.thecatapi.com/images/FCNqMC83P.jpg", country: "Afghanistan", age: 22, gender: "female" },
    { name: "carlos", profilePicture: "https://cdn2.thecatapi.com/images/DBmIBhhyv.jpg", country: "mexico", age: 38, gender: "male" },
  { name: "mahdia", profilePicture: "https://cdn2.thecatapi.com/images/FCNqMC83P.jpg", country: "Afghanistan", age: 22, gender: "female" },
    { name: "carlos", profilePicture: "https://cdn2.thecatapi.com/images/DBmIBhhyv.jpg", country: "mexico", age: 38, gender: "male" },
  { name: "mahdia", profilePicture: "https://cdn2.thecatapi.com/images/FCNqMC83P.jpg", country: "Afghanistan", age: 22, gender: "female" },
    { name: "carlos", profilePicture: "https://cdn2.thecatapi.com/images/DBmIBhhyv.jpg", country: "mexico", age: 38, gender: "male" },
  { name: "mahdia", profilePicture: "https://cdn2.thecatapi.com/images/FCNqMC83P.jpg", country: "Afghanistan", age: 22, gender: "female" },
    { name: "carlos", profilePicture: "https://cdn2.thecatapi.com/images/DBmIBhhyv.jpg", country: "mexico", age: 38, gender: "male" },
  { name: "mahdia", profilePicture: "https://cdn2.thecatapi.com/images/FCNqMC83P.jpg", country: "Afghanistan", age: 22, gender: "female" },
    { name: "carlos", profilePicture: "https://cdn2.thecatapi.com/images/DBmIBhhyv.jpg", country: "mexico", age: 38, gender: "male" },
  { name: "mahdia", profilePicture: "https://cdn2.thecatapi.com/images/FCNqMC83P.jpg", country: "Afghanistan", age: 22, gender: "female" },
    { name: "carlos", profilePicture: "https://cdn2.thecatapi.com/images/DBmIBhhyv.jpg", country: "mexico", age: 38, gender: "male" },
  { name: "mahdia", profilePicture: "https://cdn2.thecatapi.com/images/FCNqMC83P.jpg", country: "Afghanistan", age: 22, gender: "female" },
];


app.get('/user/', (req, res) => {
    console.log(req.query)
    const name = req.query.name; 
    console.log("input from user is: " + name);
    const user = users.find(u => u.name === name) 
    res.json(user);
});

app.get('/users/', (req, res) => {
    res.json(users);
});


app.get('/error/', (req, res) => {
    res.json("error");
});


app.listen(3000, () => {
  console.log('Listening on http://127.0.0.1:3000');
});
