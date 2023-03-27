const { Router } = require("express")
const router = Router()
const { confirmados, disputados, porTorneo } = require("../controllers/apis/partidos.api")

const { allTorneos, oneTorneo2, equipoEnTorneo } = require("../controllers/apis/torneos.api.js")

const { allClubes, oneClub } = require("../controllers/apis/equipos.api.js")

//TORNEOS
router.get("/torneos", allTorneos)
router.get("/torneos/:torneo_url", oneTorneo2)
router.get("/torneos/:torneo_url/:equipo_id", equipoEnTorneo)


//PARTIDOS
router.get("/partidosDisputados", disputados)
router.get("/partidosConfirmados", confirmados)
router.get("/partidos/torneo/:torneo_id", porTorneo)

//EQUIPOS
router.get("/clubes", allClubes)
router.get("/clubes/:name_url", oneClub)

module.exports = router
