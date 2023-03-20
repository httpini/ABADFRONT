// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from "axios";
import { torneos } from '../../../utils/constants'


export default async function handler(req, res) {
  let tabla = await axios.get(`http://localhost:8020/api/torneos/${req.body.torneo}`)
  // let equiposTorneo = equipos.data.filter(e => e.)
  // console.log(req.body);
  res.status(200).json({ tabla:tabla.data })

}
