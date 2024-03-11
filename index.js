const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const EmployeeModel = require("./models/Employee");
const EmployeeModel1 = require("./models/card");

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("place your string here ");

app.post("/login", (req, res) => {
  const { email, password } = req.body;

  EmployeeModel.findOne({ email: email })
    .then((user) => {
      if (user) {
        if (user.password === password) {
          res.json("success");
        } else {
          res.json("the password is incorrect ");
        }
      } else {
        res.json("no record existed");
      }
    });
});

app.post('/register', (req, res) => {
  EmployeeModel.create(req.body)
    .then(employees => res.json(employees))
    .catch(err => res.json(err));
});

app.post('/card', (req, res) => {
  const { client, query, priority } = req.body; // Extract priority from request body

  EmployeeModel1.create({ client, query, priority }) // Create a new document with priority
    .then(query => res.json(query))
    .catch(err => res.json(err));
});

app.listen(3001, () => {
  console.log("server is running ")
});
