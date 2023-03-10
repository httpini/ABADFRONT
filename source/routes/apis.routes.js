const {Router} = require("express")
const router = Router()
const{confirmados, disputados}= require("../controllers/apis/partidos.api")

const{allTorneos, oneTorneo}= require("../controllers/apis/torneos.api.js")

//TORNEOS
router.get("/torneos", allTorneos)
router.get("/torneos/:torneo_url",oneTorneo)

//PARTIDOS
router.get("/partidosConfirmados", confirmados)
router.get("/partidosDisputados", disputados)



module.exports= router
