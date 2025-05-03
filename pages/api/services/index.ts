import type { NextApiRequest, NextApiResponse } from 'next'
 
type ResponseData = {
  message: string
}
 
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
    // TODO: Implement the API endpoint for services
    res.status(501).json({ message: 'Not Implemented' })
}