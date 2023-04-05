const {body} = require("express-validator")

const createEdit = [
    body("name").notEmpty().withMessage("El nombre no puede quedar vacio").bail()
]

module.exports = createEdit