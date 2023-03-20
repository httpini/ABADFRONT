// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from "axios";
import { torneos } from '../../../utils/constants'


export default async function handler(req, res) {
  console.log(req.body.torneo);
  let equipos = await axios.get('http://localhost:8020/equipos/all')
  let fechas = await axios.get('http://localhost:8020/equipos/all')
  // let equiposTorneo = equipos.data.filter(e => e.)
  // console.log(req.body);
  res.status(200).json({ equipos: equipos.data, torneos })
}
