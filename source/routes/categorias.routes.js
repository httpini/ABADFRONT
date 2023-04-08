const {Router} = require("express")
const router = Router()
const {create, edit,created, edited, destroid, allCategorias}= require("../controllers/categorias.controller")
const createEdit = require("../validaciones/categoriasCreateEdit")
const loggedMiddleware = require('../middlewares/logged')


router.get("/",[loggedMiddleware], create)
router.post("/created", [createEdit, loggedMiddleware], created)
router.get("/edit/:id", edit)
router.put("/edit/:id", [createEdit, loggedMiddleware], edited)
router.delete("/delete/:id", destroid)
router.get("/all", allCategorias)



module.exports= router