// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import {conn} from "../../utils/db";


async function getUser(){
  const connect =  (await conn)()

  return new Promise((resolve,reject)=>{
    connect.query("select * from user",(err,res)=>{
      console.log(res)
      console.log(err)
      resolve(res)
    })
  })

}
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const data = await getUser()
  console.log('data',data)
  res.status(200).json(data)
}
