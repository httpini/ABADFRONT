const {Router} = require("express")
const router = Router()
const {}= require("../controllers/goleadores.controller")



router.get("/", create)
router.post("/created",created)
router.get("/edit/:id", edit)
router.put("/edit/:id", edited)
router.delete("/delete/:id", destroid)
router.get("/all", allCategorias)



module.exports= router