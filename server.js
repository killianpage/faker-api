//back end Common Js
const express = require("express");
const app = express();
const port = 8000;
const { User, Company } = require("./models/faker.model");

// req is shorthand for request
// res is shorthand for response
app.get("/api/users/new", (req, res) => {
    res.json(new User());
});
app.get("/api/companies/new", (req, res) => {
    res.json(new Company());
});
app.get("/api/user/company/new", (req, res) => {
    res.json({user: new User(), company: new Company()})
});

app.listen(port, () => console.log(`listening on port : ${port}`));
