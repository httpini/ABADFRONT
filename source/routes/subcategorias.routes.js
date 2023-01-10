const {Router} = require("express")
const router = Router()
const {created,edit, destroid, edited}= require("../controllers/subcategorias.controller")

router.post("/created", created)
router.get("/edit/:id", edit)
router.put("/edit/:id", edited)
router.delete("/delete/:id", destroid)

module.exports= router