const {Router} = require("express")
const router = Router()
const{confirmados, disputados,porTorneo }= require("../controllers/apis/partidos.api")

const{allTorneos, oneTorneo}= require("../controllers/apis/torneos.api.js")

//TORNEOS
router.get("/torneos", allTorneos)
router.get("/torneos/:torneo_url",oneTorneo)


//PARTIDOS
router.get("/partidosDisputados", disputados)
router.get("/partidosConfirmados", confirmados)
router.get("/partidos/torneo/:torneo_id", porTorneo)

//EQUIPOS
// router.get("/equipo", allEquipos)
// router.get("/equipo/:id", oneEquipo)

module.exports= router
