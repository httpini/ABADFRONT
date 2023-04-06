const {body} = require("express-validator")

const createEdit = [
    body("name").notEmpty().withMessage("El nombre no puede quedar vacio").bail(),
    body("nro").notEmpty().withMessage("Se debe aclarar el numero de fecha").bail(),
 
    
]

module.exports = createEdit