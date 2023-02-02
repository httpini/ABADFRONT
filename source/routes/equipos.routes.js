const {Router}= require("express")
const router = Router()
const {create, created, edit, edited, destroid, allEquipos} = require("../controllers/equipos.controller")


router.get("/", create)
router.post("/created",created)
router.get("/edit/:id", edit)
router.put("/edit/:id", edited)
router.delete("/delete/:id", destroid)

router.get("/all", allEquipos)

module.exports= router