const {Router} = require("express")
const router = Router()
const {list,oneEquipo, edit, edited, destroid,allEquiposTorneos}= require("../controllers/equipos_torneos.controller")


router.get("/", list)

router.get('/edit/:id', edit)
router.put('/edit/:id', edited)
router.delete("/delete/:id", destroid)
router.get("/all", allEquiposTorneos)
router.get("/:id", oneEquipo)



module.exports= router