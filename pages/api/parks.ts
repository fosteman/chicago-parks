import type { NextApiRequest, NextApiResponse } from 'next'
const parks = require('./chicago-parks.geojson')

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<string>
) {
  res.status(200).json(parks)
}
