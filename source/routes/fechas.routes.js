const {Router}= require("express")
const router = Router()
const {select,porTorneo,  edit,edited, create,created,destroid } = require("../controllers/fechas.controller")


router.get("/", select)
router.get("/torneo/:torneo_id", porTorneo)
router.get("/torneo/:torneo_id/create", create)
router.post("/torneo/:torneo_id/create", created)
router.get("/torneo/:torneo_id/edit/:id", edit)
router.put("/torneo/:torneo_id/edit/:id", edited)
router.delete("/torneo/:torneo_id/delete/:id", destroid)





module.exports= router