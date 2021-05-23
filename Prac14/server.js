const express = require("express"); //Inyección de la dependencia
let app = express();
let PORT = process.env.PORT || 3000; //Definición del puerto de escucha
app.use("/assets", express.static(__dirname + "/public")); //Contenido estático

app.set("view engine", "ejs");
app.get("/", (req, res) => {
  res.send(
    `<!DOCTYPE html>
    <html lang="en">
    <head> <link href="/assets/style.css" type=text/css rel="stylesheet"> <title> Document </title> </head>
    <body> <h1>Hola mundo</h1>
    <p> Este es un parrafo y su contenido debe ser azul </p> </body> </html>`
  );
});

app.get("/person/:id", (req, res) => {
  res.render("person", {
    ID: req.params.id,
    message: req.query.message,
    times: req.query.times,
  });
});

app.listen(PORT);
