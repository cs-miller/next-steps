import data from './data.json'

import type { NextApiRequest, NextApiResponse } from 'next'

function transactionsHandler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(data)
}

export default transactionsHandler