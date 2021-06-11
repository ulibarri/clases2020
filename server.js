const express = require("express");
let app = express();
let PORT = process.env.PORT || 3000;
app.use("/assets", express.static(__dirname + "/public"));

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.send(
    `<!DOCTYPE html><html lang="en"><head><link href=assets/style.css type=text/css rel=stylesheet /></head>
      <body><h1>Hello world</h1>
      <p> Este parrafo debe ser azul </p>
      </body>
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

app.post("/personjson", express.json({ type: "*/*" }), (req, res) => {
  console.log("El objeto contiene:", req.body);
  console.log("Nombre:", req.body.firstname);
  console.log("Apellido:", req.body.lastname);
});

app.listen(PORT);
