const {body, check} = require("express-validator")

const createEdit = [
    body("name").notEmpty().withMessage("El nombre no puede quedar vacio").bail(),
    body("last_name").notEmpty().withMessage("El apellido no puede quedar vacio").bail(),
    body("email").notEmpty().withMessage("El email no puede quedar vacio").bail().isEmail().withMessage("Debe ser un formato de Email Valido").bail(),
    body("tel").notEmpty().withMessage("El telefono no puede quedar vacio").bail().isLength({min:10}).withMessage("El telefono debe tener al menos 10 caracteres").bail(),
    check("equipo_id").notEmpty().withMessage("Debes Seleccionar un Equipo").bail()
]

module.exports = createEdit