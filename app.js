var express = require("express");
var app = express();

var port = process.env.PORT || 3000;

app.set("view engine", "ejs");

app.use("/assets", express.static(__dirname + "/public"));

app.use("/", function (req, res, next) {
  console.log("request url:" + req.url);
  next();
});

app.get("/", function (req, res) {
  res.render("index");
});

app.get("/person/:id", function (req, res) {
  res.render("person", { ID: req.params.id });
});

app.get("/api", function (req, res) {
  res.json({ firstname: "John", lastname: "Doe" });
});

app.listen(port);
