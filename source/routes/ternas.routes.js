const {Router} = require("express")
const router = Router()
const {create, edit,created, edited, destroid, allTernas, detail}= require("../controllers/ternas.controller")
const createEdit = require("../validaciones/ternasCreateEdit")



router.get("/", create)
router.post("/created",[createEdit],created)
router.get("/edit/:id", edit)
router.put("/edit/:id",[createEdit], edited)
router.delete("/delete/:id", destroid)
router.get("/all", allTernas)
router.get("/:id", detail)



module.exports= router