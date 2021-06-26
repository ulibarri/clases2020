let express = require("express")
let app = express()
let personsRoute = require("./routes/person")
let path = require("path")

app.set("views", path.join(__dirname, "../views"))
app.set("view engine", "ejs")
app.use(personsRoute)
app.use("/assets", express.static(path.join(__dirname + "/public")))

app.use((req, res, next) => {
  res.render("404")
});

let PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log("puerto 3000")
})