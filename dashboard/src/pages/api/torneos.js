import axios from "axios";



export default async function handler(req, res) {
  let torneos = await axios.get(`http://localhost:8020/api/torneos`)
  // console.log(torneos.data.torneos);
  // let equiposTorneo = equipos.data.filter(e => e.)
  // console.log(req.body);
  res.status(200).json({ torneos:torneos.data.torneos })

}
