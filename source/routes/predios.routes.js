const {Router} = require("express")
const router = Router()
const {create, created, list, edit, edited, destroid}= require("../controllers/predios.controller")


router.get("/", list)
router.get('/create', create)
router.post("/created",created)
router.get("/edit/:id", edit)
router.put("/edit/:id", edited)
router.delete("/delete/:id", destroid)


module.exports= router