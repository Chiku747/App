const express = require("express");
const app = express()
const PORT = process.env.PORT|| 3000;
const router = require("./routes/userroutes")
const path = require("path");
const ejs = require("ejs");


app.use(express.urlencoded({ extended: true  }));

//Configuring Static Files
app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs");


app.use("/", router )

app.listen(PORT)