const {body, check} = require("express-validator")
const {extname,resolve} = require('path')
const {unlinkSync} = require('fs')

const edit = [
    body("name").notEmpty().withMessage("El nombre no puede quedar vacio").bail(),
    body("temporada").notEmpty().withMessage("La temporada no puede quedar vacia").bail().isLength({min:4, max:4}).withMessage("La temporada debe tener 4 caracteres").bail(),
    body("reglamento_path").custom( async (value, {req})=>{
        let archivos = req.files
        let extensiones = [".pdf"]
        if (archivos.length != 0){
            
            let reglamento = archivos[0]
            let extension = extname(reglamento.filename)
            if(!extensiones.includes(extension)){
                unlinkSync(resolve(__dirname, '../../public/assets/','reglamentos-torneos',reglamento.filename))
                throw new Error('El reglamento tiene que ser en formato .pdf')
            }
            if(reglamento.size > 2097152){
                unlinkSync(resolve(__dirname, '../../public/assets/','reglamentos-torneos',reglamento.filename))
                throw new Error('El reglamento supera el peso de 2MB')
            }
        }
        return true
    })
]

module.exports = edit