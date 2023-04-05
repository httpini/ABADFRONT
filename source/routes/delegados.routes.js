const {Router} = require("express")
const router = Router()
const {create, edit,created, edited, destroid}= require("../controllers/delegados.controller")
const createEdit = require("../validaciones/delegadosCreateEdit")


router.get("/", create)
router.post('/created', [createEdit], created)
router.get('/edit/:id', edit)
router.put('/edit/:id', [createEdit], edited)
router.delete("/delete/:id", destroid)



module.exports= router