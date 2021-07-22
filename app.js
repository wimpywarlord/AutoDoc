const express = require("express");
var bodyParser = require("body-parser");

const app = express();

var methodOverride = require("method-override");

app.use(methodOverride("_method"));

app.use(express.static(__dirname + "/public"));

app.set("view engine", "ejs");

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.get("/", (req, res) => {
    res.render("./login.ejs");
});

app.get("/index", (req, res) => {
    res.render("./index.ejs");
});

app.get("/charthome", (req, res) => {
    res.render("./charthome.ejs");
});

app.get("/academic", (req, res) => {
    res.render("./academic.ejs");
});

app.get("/nonacad", (req, res) => {
    res.render("./nonacad");
});

app.get("/comparative", (req, res) => {
    res.render("./comparative");
});

app.get("/team", (req, res) => {
    res.render("./teamkshitij.ejs");
});

app.get("*", (req, res) => {
    res.render("./notfound.ejs");
});
  

app.listen(process.env.PORT || 5000, () => {
    console.log("working in 5000");
  });