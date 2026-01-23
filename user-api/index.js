const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "blog",
});

connection.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL:", err);
    return;
  }
  console.log("connected to MySQL ✅");
});

const sql = "SELECT * FROM users where id = 4";

connection.query(sql, (error, results) => {
  if (error) {
    console.error("Error in query:", error);
    return;
  }

  console.log("users:");
  console.log(results);
  console.table(results);
});

const app = express();
app.use(cors());
app.use(express.json());

// Middleware to parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));
let users = [
  {
    id: 0,
    name: "carlos number 1",
    profilePicture: "https://cdn2.thecatapi.com/images/DBmIBhhyv.jpg",
    country: "mexico",
    age: 38,
    gender: "male",
  },
  {
    id: 1,
    name: "mahdia number 2",
    profilePicture: "https://cdn2.thecatapi.com/images/FCNqMC83P.jpg",
    country: "Afghanistan",
    age: 22,
    gender: "female",
  },
  {
    id: 2,
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
    name: "carlos number 5",
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
  const id = req.query.userId;
  console.log("input from user is: " + id);

  const sql = `SELECT * FROM users where id = ${id}`;

  connection.query(sql, (error, results) => {
    if (error) {
      console.error("Error in query:", error);
      return;
    }
    console.log("users:");
    console.table(results);
    res.json(results);
  });
});

app.get("/users/", (req, res) => {
  const sql = `SELECT * FROM users`;
  connection.query(sql, (error, results) => {
    if (error) {
      console.error("Error in query:", error);
      return;
    }
    console.table(results);
    res.json(results);
  });
});

app.get("/error/", (req, res) => {
  res.json("error");
});

app.post("/user-update", (req, res) => {
  console.log("Request body:", req.body);

  const { username, id } = req.body;

  const newUsers = users.map((user) => {
    if (user.id === id) {
      return { ...user, name: username };
    }
    return user;
  });

  users = newUsers;

  console.log(`Updating user ${id} with username: ${username}`);
});

app.listen(3000, () => {
  console.log("Listening on http://127.0.0.1:3000");
});
