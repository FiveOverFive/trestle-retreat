import type { NextApiRequest, NextApiResponse } from 'next'
import { GetReviewsResponse, ApiError } from '@/types/api'
import { mockReviews } from '@/data/trestleretreatData'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<GetReviewsResponse | ApiError>
) {
  if (req.method === 'GET') {
    res.status(200).json(mockReviews)
  } else {
    res.setHeader('Allow', ['GET'])
    res.status(405).json({
      code: 'METHOD_NOT_ALLOWED',
      message: `Method ${req.method} Not Allowed`
    })
  }
}