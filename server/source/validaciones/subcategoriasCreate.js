const {body, check} = require("express-validator")

const createEdit = [
    body("name").notEmpty().withMessage("El nombre no puede quedar vacio").bail(),
    check("categoria_id").notEmpty().withMessage("Debes Seleccionar una Categoria")

]

module.exports = createEdit