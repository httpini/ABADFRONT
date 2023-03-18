const {Router}= require("express")
const router = Router()
const {select, create,created, edited, destroid} = require("../controllers/sancionados.controller")


router.get("/", select)
router.get("/torneo/:torneo_id", create)
router.post("/torneo/:torneo_id/created",created )
router.put("/torneo/:torneo_id/edit/:id", edited)
router.delete("/delete/:id", destroid)
//router.put("/:id/agregar", agregarTarjetas)




module.exports= router