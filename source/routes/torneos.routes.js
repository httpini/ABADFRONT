const {Router} = require('express')
const router = Router()
const {create,created,edit,edited,destroid, oneTorneo, quitarEquipos, agregarEquipos} = require('../controllers/torneos.controller')
const createMiddleware = require("../middlewares/torneosCreate")
const  editMiddleware= require("../middlewares/torneosEdit")

router.get("/", create)
router.post("/created",[createMiddleware], created)
router.get("/edit/:id",edit)
router.put("/edit/:id",[editMiddleware],edited)
router.delete("/delete/:id",destroid)
router.get("/:id",oneTorneo)
router.put("/:id/quitarEquipos",quitarEquipos)
router.put("/:id/agregarEquipo", agregarEquipos)

module.exports = router