const {body} = require("express-validator")


const createEdit = [
    body("name").notEmpty().withMessage("El nombre no puede quedar vacio").bail(),
    body("adress").notEmpty().withMessage("La direccion no puede quedar vacia").bail(),
    body("map").notEmpty().withMessage("La URL de google maps no puede quedar vacia")
]

module.exports = createEdit