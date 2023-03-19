const {Router} = require('express')
const router = Router()
const {create,created,edit,edited,destroid, oneTorneo, quitarEquipos, agregarEquipos} = require('../controllers/torneos.controller')
const multer = require('multer');
const storage = require('../modules/storage')
const upload = multer({storage: storage('reglamentos-torneos')});

router.get("/", create)
router.post("/created",upload.any(), created)
router.get("/edit/:id",edit)
router.put("/edit/:id",upload.any(),edited)
router.delete("/delete/:id",destroid)
router.get("/:id",oneTorneo)
router.put("/:id/quitarEquipos",quitarEquipos)
router.put("/:id/agregarEquipo", agregarEquipos)

module.exports = router