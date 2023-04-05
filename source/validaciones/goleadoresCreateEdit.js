const {body, check} = require("express-validator")

const createEdit = [
    body("name").notEmpty().withMessage("El nombre no puede quedar vacio").bail(),
    body("last_name").notEmpty().withMessage("El apellido no puede quedar vacio").bail(),
    body("goles").notEmpty().withMessage("Para crear un goleador al menos le debes otorgar un gol").bail(),
    check("equipo_id").notEmpty().withMessage("Debes Seleccionar un Equipo")

]

module.exports = createEdit