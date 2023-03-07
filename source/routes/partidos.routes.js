const {Router}= require("express")
const router = Router()
const {select,porTorneo,  edit,edited, create,created,destroid, partido } = require("../controllers/partidos.controller")


router.get("/", select)
router.get("/all", partido)
router.get("/torneo/:torneo_id", porTorneo)
//router.get("/torneo/:torneo_id/create", create)
//router.post("/torneo/:torneo_id/create", created)
router.get("/torneo/:torneo_id/edit/:id", edit)
router.put("/edit/:id", edited)
router.delete("/delete/:id", destroid)





module.exports= router