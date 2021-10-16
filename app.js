const express = require("express");

const app = express();

var methodOverride = require("method-override");

app.use(methodOverride("_method"));

app.use(express.static(__dirname + "/public"));

app.set("view engine", "ejs");

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.get("/", (req, res) => {
    res.render("./login");
});

app.get("/index", (req, res) => {
    res.render("./index");
});

app.get("/charthome", (req, res) => {
    res.render("./charthome");
});

app.get("/academic", (req, res) => {
    res.render("./academic");
});

app.get("/nonacad", (req, res) => {
    res.render("./nonacad");
});

app.get("/comparative", (req, res) => {
    res.render("./comparative");
});

app.get("/team", (req, res) => {
    res.render("./teamkshitij");
});

app.get("*", (req, res) => {
    res.render("./notfound");
});
  

app.listen(process.env.PORT || 5000, () => {
    console.log("working in 5000");
  });