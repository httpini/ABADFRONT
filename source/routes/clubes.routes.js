const {Router}= require("express")
const router = Router()
const {created, edit, edited, list} = require("../controllers/clubes.controller")


router.get("/", list)
router.post("/created",created)
router.get("/edit/:id", edit)
router.put("/edit/:id", edited)


module.exports= router