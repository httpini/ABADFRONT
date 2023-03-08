const {Router} = require("express")
const router = Router()
const{confirmados}= require("../../controllers/apis/partidos.api")

router.get("/api/partidosConfirmados", confirmados)
module.exports= router
