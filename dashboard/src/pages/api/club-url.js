// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from "axios";

export default async function handler(req, res) {
    let club = await axios.get(`http://localhost:8020/api/clubes/${req.body.club}`)
    res.status(200).json({ club: club.data })
}
