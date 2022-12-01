import type { NextApiRequest, NextApiResponse } from 'next'
import {getConn} from "../../../../utils/db";
import {user_table} from "../../../../types/user";
import {Pagination} from "../../../../types/common";


export async function getSellerList(query:Pagination){
	const conn = await getConn()
	return new Promise((resolve,reject)=>{
		conn.query(`select * from seller
				where se_company like %${query.keyword}%
				limit ${query.page},${query.size}`,(err,res)=>{
			resolve(res)
		})
	})
}

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	let {query} = req
	if(!query.page){
		query.page = "1"
	}
	if(!query.size){
		query.size = "10"
	}
	query.page = String(Number(query.page) - 1)
	const data = await getSellerList(query)
	res.status(200).json(data)
}
