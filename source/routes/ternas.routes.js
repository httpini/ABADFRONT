const {Router} = require("express")
const router = Router()
const {create, edit,created, edited, destroid, allTernas, detail}= require("../controllers/ternas.controller")



router.get("/", create)
router.post("/created",created)
router.get("/edit/:id", edit)
router.put("/edit/:id", edited)
router.delete("/delete/:id", destroid)
router.get("/all", allTernas)
router.get("/:id", detail)



module.exports= router