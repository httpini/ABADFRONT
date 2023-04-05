const {Router}= require("express")
const router = Router()
const {select, create,created, edited, destroid} = require("../controllers/sancionados.controller")
const createEdit = require("../validaciones/sancionadosCreateEdit")

router.get("/", select)
router.get("/torneo/:torneo_id", create)
router.post("/torneo/:torneo_id/created", [createEdit], created )
router.put("/torneo/:torneo_id/edit/:id",[createEdit], edited)
router.delete("/delete/:id", destroid)





module.exports= router