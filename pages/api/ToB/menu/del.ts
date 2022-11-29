import type { NextApiRequest, NextApiResponse } from 'next'
import {getConn} from "../../../../utils/db";
import {user_table} from "../../../../types/user";


export async function delAccountById(query:user_table){
	const conn = await getConn()
	return new Promise((resolve,reject)=>{
		conn.query("delete  from menu where id = ?",[query.id],(err,res)=>{
			resolve(res)
		})
	})
}

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	const {query} = req
	const data = await delAccountById(query)
	res.status(200).json(data)
}
