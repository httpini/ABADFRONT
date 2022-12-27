const {resolve} = require("path")
const express = require('express')
const app = express()
const {port , callback} = require("./modules/port")
const public = require("./modules/public")

app.listen(port, callback)
app.use(public)

app.set ("views", resolve(__dirname, "views"));
app.set ("view engine", "ejs");

app.use(express.urlencoded({extended:false}));
app.use(express.json())

app.use(require("./routes/home.routes"))