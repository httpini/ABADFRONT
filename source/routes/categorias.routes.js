const {Router} = require("express")
const router = Router()
const {create, edit,created, edited, destroid, allCategorias}= require("../controllers/categorias.controller")
const createEdit = require("../validaciones/categoriasCreateEdit")


router.get("/", create)
router.post("/created", [createEdit], created)
router.get("/edit/:id", edit)
router.put("/edit/:id", [createEdit], edited)
router.delete("/delete/:id", destroid)
router.get("/all", allCategorias)



module.exports= router