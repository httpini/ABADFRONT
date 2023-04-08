const {Router} = require("express")
const router = Router()
const {create, created, edit, edited, destroid}= require("../controllers/predios.controller")
const createEdit = require("../validaciones/prediosCreateEdit")


router.get("/", create)
router.post("/created",[createEdit],created)
router.get("/edit/:id", edit)
router.put("/edit/:id",[createEdit], edited)
router.delete("/delete/:id", destroid)


module.exports= router