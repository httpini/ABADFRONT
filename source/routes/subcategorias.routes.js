const {Router} = require("express")
const router = Router()
const {created,edit, destroid, edited, allSubCategorias}= require("../controllers/subcategorias.controller")
const create = require("../validaciones/subcategoriasCreate")

router.post("/created",[create], created)
router.get("/edit/:id", edit)
router.put("/edit/:id", edited)
router.delete("/delete/:id", destroid)

router.get("/all", allSubCategorias)

module.exports= router