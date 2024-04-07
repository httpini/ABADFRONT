// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from "axios";

export default async function handler(req, res) {
    // console.log(process.env.PORT);

    let clubes = await axios.get(`${process.env.URL}/api/clubes`)
    res.status(200).json({ clubes: clubes.data.clubes })
}