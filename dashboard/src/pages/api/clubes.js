// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from "axios";

export default async function handler(req, res) {
    let clubes = await axios.get(`http://localhost:8020/api/clubes`)
    res.status(200).json({ clubes: clubes.data.clubes })
}
