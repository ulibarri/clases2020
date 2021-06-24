let express = require("express");
let app = express();
let personsRoute = require("./routes/person");

app.set("view engine", "ejs");
app.use(personsRoute);
app.use("/assets", express.static(path.join(__dirname + "/public")));

let PORT =process.env.PORT || 3000;

app.listen(PORT, ()=>{
    console.log("escuchando en el puerto 3000")
})