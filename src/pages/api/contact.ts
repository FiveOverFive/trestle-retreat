import type { NextApiRequest, NextApiResponse } from 'next'
import { ContactForm, SubmitContactResponse, ApiError } from '@/types/api'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<SubmitContactResponse | ApiError>
) {
  if (req.method === 'POST') {
    const contactForm: ContactForm = req.body

    // Validate required fields
    const errors: string[] = []

    if (!contactForm.name || contactForm.name.trim().length < 2) {
      errors.push('Name must be at least 2 characters long')
    }

    if (!contactForm.email || !isValidEmail(contactForm.email)) {
      errors.push('Valid email address is required')
    }

    if (!contactForm.message || contactForm.message.trim().length < 10) {
      errors.push('Message must be at least 10 characters long')
    }

    if (errors.length > 0) {
      return res.status(400).json({
        code: 'VALIDATION_ERROR',
        message: 'Invalid input data',
        details: errors
      })
    }

    // Generate a mock inquiry ID
    const inquiryId = `inquiry-${Date.now()}`

    // Log the inquiry (in a real app, this would save to a database)
    console.log('New inquiry received:', {
      id: inquiryId,
      ...contactForm,
      timestamp: new Date().toISOString()
    })

    res.status(201).json({
      id: inquiryId,
      status: 'submitted',
      message: 'Your inquiry has been submitted successfully! We\'ll get back to you within 24 hours.'
    })
  } else {
    res.setHeader('Allow', ['POST'])
    res.status(405).json({
      code: 'METHOD_NOT_ALLOWED',
      message: `Method ${req.method} Not Allowed`
    })
  }
}

function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}