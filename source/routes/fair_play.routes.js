const {Router}= require("express")
const router = Router()
const {select,porTorneo, agregarTarjetas, edit,edited } = require("../controllers/fair_play.controller")


router.get("/", select)
router.get("/torneo/:torneo_id", porTorneo)
router.get("/edit/:id", edit)
router.put("/edit/:id", edited)
router.put("/:id/agregar", agregarTarjetas)




module.exports= router