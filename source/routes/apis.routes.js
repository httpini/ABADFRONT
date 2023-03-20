const {Router} = require("express")
const router = Router()
const{confirmados, disputados,porTorneo, porTorneo2 }= require("../controllers/apis/partidos.api")

const{allTorneos, oneTorneo}= require("../controllers/apis/torneos.api.js")

//TORNEOS
router.get("/torneos", allTorneos)
router.get("/torneos/:torneo_url",oneTorneo)


//PARTIDOS
router.get("/partidosConfirmados", confirmados)
router.get("/partidosDisputados", disputados)
router.get("/partidos/torneo/:torneo_id", porTorneo2)



module.exports= router
