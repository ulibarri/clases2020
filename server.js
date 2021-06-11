const express = require("express");
let app = express();
let PORT = process.env.PORT || 3000;
app.use("/assets", express.static(__dirname + "/public"));
const User = require("./database");

app.listen(PORT, () => {
  app.get("/form", (req, res) => {
    res.send("this is a blank page");
    User.findOne({ email: "admin@localhost" }, (err) => {
      if (err){
        console.log("err")
      } else {
        const newUser = new User({
          username: "admin",
          email: "admin@localhost",
        });
  
        newUser.save().catch(err => console.log(err));
        console.log("Admin user created");
      }
      
    });
  });
});
