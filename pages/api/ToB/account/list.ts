// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import {getConn} from "../../../../utils/db";


export async function getAccountList(){
	const conn = await getConn()
	return new Promise((resolve,reject)=>{
		conn.query("select * from user",(err,res)=>{
			resolve(res)
		})
	})
	
}
export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	const data = await getAccountList()
	res.status(200).json(data)
}
