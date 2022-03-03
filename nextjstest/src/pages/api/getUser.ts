// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

const userInfo = {
  name:'푸하핫',
  age:15,
  local: "seoul"
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  setTimeout(()=>{
    const { query } = req;
    res.status(200).json({
      ...userInfo,
      query,
    })  
  },10000)
}