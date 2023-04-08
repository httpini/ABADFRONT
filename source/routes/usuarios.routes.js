const {Router} = require('express')
const router = Router()
const {create,created,edit,edited,destroid, login, logged} = require('../controllers/usuarios.controller')
const createUsuarios = require("../validaciones/usuariosCreate")
const editUsuarios = require("../validaciones/usuariosEdit")

router.get("/", create)
router.post("/created",[createUsuarios], created),
router.get("/edit/:id", edit)
router.put("/edit/:id",[editUsuarios], edited)
router.delete("/delete/:id", destroid)
router.get('/login', login) //login
router.post("/login")   //logged


module.exports = router