// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from "axios";



export default async function handler(req, res) {
    let partidos = await axios.get(`http://localhost:8020/api/partidos/torneo/${req.body.torneo}`)


    // let equiposTorneo = equipos.data.filter(e => e.)
    // console.log(req.body);
    res.status(200).json({ partidos: partidos.data.partidos })

}
