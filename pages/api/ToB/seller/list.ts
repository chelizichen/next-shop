import type { NextApiRequest, NextApiResponse } from 'next'
import {conn} from "../../../../utils/db";
import {Pagination} from "../../../../types/common";


export async function getSellerList(query:Pagination){

	return new Promise((resolve,reject)=>{
		conn.getConnection((err,connect)=> {
			connect.query(`select * from seller`, ["%"+query.keyword+"%",query.page,query.size],(err, res) => {
				// connect.query(`select * from seller where se_company like ? limit ?,?`, ["%"+query.keyword+"%",query.page,query.size],(err, res) => {
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
