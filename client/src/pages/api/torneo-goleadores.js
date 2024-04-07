// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from "axios";



export default async function handler(req, res) {
    let goleadores = await axios.get(`${process.env.URL}/api/torneos/${req.body.torneo}`)    
    res.status(200).json({ goleadores: goleadores.data.goleadores })

}
