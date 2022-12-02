// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import {conn} from "../../../../utils/db";


export async function getAccountList(){
	return new Promise((resolve,reject)=>{
		conn.getConnection((err,connect)=> {
			connect.query("select * from user", (err, res) => {
				resolve(res)
			})
			connect.release()
			
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
