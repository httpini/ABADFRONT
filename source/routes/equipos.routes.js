const {Router}= require("express")
const router = Router()
const {create, created, edit, edited, destroid, allEquipos} = require("../controllers/equipos.controller")
const createEdit = require("../validaciones/equiposCreateEdit")

router.get("/", create)
router.post("/created", [createEdit], created)
router.get("/edit/:id", edit)
router.put("/edit/:id", [createEdit], edited)
router.delete("/delete/:id", destroid)

router.get("/all", allEquipos)

module.exports= router