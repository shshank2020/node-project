const express = require("express");
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  return res.status(200).json("Welcome to my api");
});

app.get("/getData", (req, res) => {
  let data = {
    id: 1,
    name: "Rajesh",
    age: 24,
    address: "Ranchi, Jharkhand",
  };
  return res.status(200).json(data);
});

//localhost:3000/userData?name=Rajesh
app.get("/userData", (req, res) => {
  let data = req.query.name;
  console.log(data);
  return res.status(200).json(data);
});

//localhost:3000/fetchData/12
app.get("/fetchData/:age/", (req, res) => {
  let age = req.params.age;
  console.log(age);
  return res.status(200).json(age);
});

app.listen(PORT, () => {
  console.log(`Listen to PORT ${PORT}`);
});
