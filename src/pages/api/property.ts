import type { NextApiRequest, NextApiResponse } from 'next'
import { GetPropertyResponse, ApiError } from '@/types/api'
import { mockProperty } from '@/data/trestleretreatData'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<GetPropertyResponse | ApiError>
) {
  if (req.method === 'GET') {
    res.status(200).json(mockProperty)
  } else {
    res.setHeader('Allow', ['GET'])
    res.status(405).json({
      code: 'METHOD_NOT_ALLOWED',
      message: `Method ${req.method} Not Allowed`
    })
  }
}