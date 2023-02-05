const {Router} = require("express")
const router = Router()
const {create, created,agregarGoles,quitarGoles, edit, edited, destroid}= require("../controllers/goleadores.controller")



router.get("/", create)
router.post("/created",created)
router.post("/:id/agregar", agregarGoles)
router.post("/:id/quitar", quitarGoles)
router.get("/edit/:id", edit)
router.put("/edit/:id", edited)
router.delete("/delete/:id", destroid)




module.exports= router