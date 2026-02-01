import type { NextApiRequest, NextApiResponse } from 'next'
import { GetAvailabilityResponse, ApiError } from '@/types/api'
import { mockAvailability } from '@/data/trestleretreatData'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<GetAvailabilityResponse | ApiError>
) {
  if (req.method === 'GET') {
    const { startDate, endDate } = req.query

    if (!startDate || !endDate) {
      return res.status(400).json({
        code: 'VALIDATION_ERROR',
        message: 'startDate and endDate are required',
        details: ['startDate is required', 'endDate is required']
      })
    }

    // Filter availability by date range
    const start = new Date(startDate as string)
    const end = new Date(endDate as string)

    const filteredDates = mockAvailability.filter(dateAvail => {
      const date = new Date(dateAvail.date)
      return date >= start && date <= end
    })

    res.status(200).json({
      dates: filteredDates
    })
  } else {
    res.setHeader('Allow', ['GET'])
    res.status(405).json({
      code: 'METHOD_NOT_ALLOWED',
      message: `Method ${req.method} Not Allowed`
    })
  }
}