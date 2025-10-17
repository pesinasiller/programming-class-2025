const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

const users = [
  {
    id: 0,
    name: "carlos",
    profilePicture: "https://cdn2.thecatapi.com/images/DBmIBhhyv.jpg",
    country: "mexico",
    age: 38,
    gender: "male",
  },
  {
    id: 1,
    name: "mahdia",
    profilePicture: "https://cdn2.thecatapi.com/images/FCNqMC83P.jpg",
    country: "Afghanistan",
    age: 22,
    gender: "female",
  },
  {
    id: 3,
    name: "carlos",
    profilePicture: "https://cdn2.thecatapi.com/images/DBmIBhhyv.jpg",
    country: "mexico",
    age: 38,
    gender: "male",
  },
  {
    id: 4,
    name: "mahdia",
    profilePicture: "https://cdn2.thecatapi.com/images/FCNqMC83P.jpg",
    country: "Afghanistan",
    age: 22,
    gender: "female",
  },
  {
    id: 5,
    name: "carlos",
    profilePicture: "https://cdn2.thecatapi.com/images/DBmIBhhyv.jpg",
    country: "mexico",
    age: 38,
    gender: "male",
  },
  {
    id: 6,
    name: "mahdia",
    profilePicture: "https://cdn2.thecatapi.com/images/FCNqMC83P.jpg",
    country: "Afghanistan",
    age: 22,
    gender: "female",
  },
  {
    id: 7,
    name: "carlos",
    profilePicture: "https://cdn2.thecatapi.com/images/DBmIBhhyv.jpg",
    country: "mexico",
    age: 38,
    gender: "male",
  },
  {
    id: 8,
    name: "mahdia",
    profilePicture: "https://cdn2.thecatapi.com/images/FCNqMC83P.jpg",
    country: "Afghanistan",
    age: 22,
    gender: "female",
  },
  {
    id: 9,
    name: "carlos",
    profilePicture: "https://cdn2.thecatapi.com/images/DBmIBhhyv.jpg",
    country: "mexico",
    age: 38,
    gender: "male",
  },
  {
    id: 10,
    name: "mahdia",
    profilePicture: "https://cdn2.thecatapi.com/images/FCNqMC83P.jpg",
    country: "Afghanistan",
    age: 22,
    gender: "female",
  },
  {
    id: 11,
    name: "carlos",
    profilePicture: "https://cdn2.thecatapi.com/images/DBmIBhhyv.jpg",
    country: "mexico",
    age: 38,
    gender: "male",
  },
  {
    id: 12,
    name: "mahdia",
    profilePicture: "https://cdn2.thecatapi.com/images/FCNqMC83P.jpg",
    country: "Afghanistan",
    age: 22,
    gender: "female",
  },
  {
    id: 13,
    name: "carlos",
    profilePicture: "https://cdn2.thecatapi.com/images/DBmIBhhyv.jpg",
    country: "mexico",
    age: 38,
    gender: "male",
  },
  {
    id: 14,
    name: "mahdia",
    profilePicture: "https://cdn2.thecatapi.com/images/FCNqMC83P.jpg",
    country: "Afghanistan",
    age: 22,
    gender: "female",
  },
  {
    id: 15,
    name: "carlos",
    profilePicture: "https://cdn2.thecatapi.com/images/DBmIBhhyv.jpg",
    country: "mexico",
    age: 38,
    gender: "male",
  },
  {
    id: 16,
    name: "mahdia",
    profilePicture: "https://cdn2.thecatapi.com/images/FCNqMC83P.jpg",
    country: "Afghanistan",
    age: 22,
    gender: "female",
  },
    {
    id: 17,
    name: "mahdia",
    profilePicture: "https://cdn2.thecatapi.com/images/FCNqMC83P.jpg",
    country: "Afghanistan",
    age: 22,
    gender: "female",
  },
];

app.get("/user/", (req, res) => {
  console.log(req.query);
  const id = req.query.userId;

  console.log("input from user is: " + id);

  const user = users.find((user) => user.id ===  parseInt(id));
  console.log("user found: ", user);
  res.json(user);
});



app.get("/users/", (req, res) => {
  res.json(users);
});

app.get("/error/", (req, res) => {
  res.json("error");
});

app.listen(3000, () => {
  console.log("Listening on http://127.0.0.1:3000");
});
