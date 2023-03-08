// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { torneos } from '../../../utils/constants'

export default function handler(req, res) {
  res.status(200).json({ torneos })
}
