const {body, check} = require("express-validator")

const createEdit = [
    body("name").notEmpty().withMessage("El nombre no puede quedar vacio").bail(),
    body("last_name").notEmpty().withMessage("El apellido no puede quedar vacio").bail(),
    body("sancion").notEmpty().withMessage("Debes indicar la pena aplicada o en todo caso provisorio").bail(),
    body("f_vuelta").notEmpty().withMessage("Debes indicar la fecha de vuelta o en todo caso provisorio").bail(),
    check("f_sancion").notEmpty().withMessage("Debes Seleccionar la fecha en que fue sancionado").bail(),
    check("equipo_id").notEmpty().withMessage("Debes Seleccionar el equipo al que pertenece")
]

module.exports = createEdit