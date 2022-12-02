// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import {conn} from "../../../../utils/db";
import Ret from "../../../../utils/ret";


export async function getSeckillList(){

	return new Promise((resolve,reject)=>{
		conn.getConnection((err,connect)=> {
			
			connect.query("select * from seckill", (err, res) => {
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
	const data = await getSeckillList()
	res.status(200).json(Ret.success(data))
}
