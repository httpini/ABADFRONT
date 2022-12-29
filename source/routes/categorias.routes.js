const {Router} = require("express")
const router = Router()
const {create, edit,created, edited, destroid}= require("../controllers/categorias.controller")


router.get("/", create)
router.post("/created",created)
router.get("/edit/:id", edit)
router.put("/edit/:id", edited)
router.delete("/delete/:id", destroid)


module.exports= router