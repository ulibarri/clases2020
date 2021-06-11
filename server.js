const express = require("express");
let app = express();
let PORT = process.env.PORT || 3000;
app.use("/assets", express.static(__dirname + "/public"));

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.send(
    `<!DOCTYPE html><html lang="en"><head><link href=assets/style.css type=text/css rel=stylesheet /></head>
      <body><h1>Hello world</h1></body>
      <p> Este parrafo debe ser azul </p>
      </html>`
  );
});

app.get("/person/:id", (req, res) => {
  res.render("person", {
    name: req.params.id,
    msg: req.query.msg,
    times: req.query.times,
  });
});

app.get("/student", (req, res) => {
  res.render("index");
});

app.post("/student", express.urlencoded({ extended: false }), (req, res) => {
  res.send(`First name es: ${req.body.fname}, Last name es: ${req.body.lname}`);
});

app.listen(PORT);
