const {Router} = require("express")
const router = Router()
const{confirmados, disputados}= require("../../controllers/apis/partidos.api")

router.get("/api/partidosConfirmados", confirmados)
router.get("/api/partidosDisputados", disputados)


module.exports= router
