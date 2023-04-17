// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from "axios";

export default async function handler(req, res) {
    let partidos = await axios.get(`${process.env.URL}/api/partidos/torneo/${req.body.torneo}`)
    res.status(200).json({ partidos: partidos.data.partidos })
}
