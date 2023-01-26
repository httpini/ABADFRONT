const {Router} = require("express")
const router = Router()
const {create, edit,created, edited, destroid, allCategorias}= require("../controllers/categorias.controller")



router.get("/", create)
router.post("/created",created)
router.get("/edit/:id", edit)
router.put("/edit/:id", edited)
router.delete("/delete/:id", destroid)
router.get("/all", allCategorias)



module.exports= router