const {Router} = require("express")
const router = Router()
const {select, create, created,agregarGoles, edit, edited, destroid}= require("../controllers/goleadores.controller")


router.get("/", select)
router.get("/torneo/:torneo_id", create)
router.post("/torneo/:torneo_id/created",created)
router.post("/torneo/:torneo_id/:id/agregar", agregarGoles)
router.get("/torneo/:torneo_id/edit/:id", edit)
router.put("/torneo/:torneo_id/edit/:id", edited)
router.delete("/delete/:id", destroid)




module.exports= router