const {Router} = require("express")
const router = Router()
const {list,oneEquipo, edit, edited, destroid}= require("../controllers/equipos_torneos.controller")


router.get("/", list)

router.get('/edit/:id', edit)
router.put('/edit/:id', edited)
router.delete("/delete/:id", destroid)
router.get("/:id", oneEquipo)



module.exports= router