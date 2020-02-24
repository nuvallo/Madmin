const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const port = 5000;
const app = express();
const token =
  "esfeyJ1c2VySWQiOiJiMDhmODZhZi0zNWRhLTQ4ZjItOGZhYi1jZWYzOTA0NUIhkufemQifQ";

let nextId = 7;

app.use(bodyParser.json());

app.use(cors());

function authenticator(req, res, next) {
  const { authorization } = req.headers;
  if (authorization === token) {
    next();
  } else {
    res.status(403).json({ error: "User must be logged in to do that." });
  }
}

app.post("/api/login", (req, res) => {
  const { email, password } = req.body;
  if (email === "madmin@gmail.com" && password === "123") {
    req.loggedIn = true;
    res.status(200).json({
      payload: token
    });
  } else if (email === "nuvallo.inc@gmail.com" && password === "123") {
    req.loggedIn = true;
    res.status(200).json({
      payload: token
    });
  } else {
    res
      .status(403)
      .json({ error: "Email or Password incorrect. Please see Readme" });
  }
});

function getNextId() {
  return nextId++;
}

app.listen(port, () => {
  console.log(`server listening on port ${port}`);
});
