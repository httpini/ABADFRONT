const {resolve} = require("path")
const express = require('express')
const app = express()
const {port , callback} = require("./modules/port")
const public = require("./modules/public")

const method = require("method-override") //PARA HACER LOS FORMS POR PUT Y DELETE

app.listen(port, callback)
app.use(public)

app.set ("views", resolve(__dirname, "views"));
app.set ("view engine", "ejs");

app.use(express.urlencoded({extended:false}));
app.use(express.json())

app.use(method("m"))//Para usar el method-override

app.use(require("./routes/home.routes")) // RUTAS DEL HOME

app.use("/predios",require("./routes/predios.routes")) //rutas de predios