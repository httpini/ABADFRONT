const {body} = require("express-validator")

const createEdit = [
    body("name").notEmpty().withMessage("El nombre de la terna no puede quedar vacio").bail(),
    body("responsable").notEmpty().withMessage("El nombre del responsable no puede quedar vacio").bail(),
    body("email").notEmpty().withMessage("El email no puede quedar vacio").bail().isEmail().withMessage("Debe ser un formato de Email Valido").bail(),
    body("tel").notEmpty().withMessage("El telefono no puede quedar vacio").bail().isLength({min:10}).withMessage("El telefono debe tener al menos 10 caracteres").bail(),
   
]

module.exports = createEdit