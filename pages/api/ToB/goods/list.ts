import {NextApiRequest, NextApiResponse} from "next";
import {conn} from "../../../../utils/db";
import {Pagination} from "../../../../types/common";


export async function getList(pagination:Pagination){


	return new Promise((resolve)=>{
		let {keyword,page,size} = pagination
		keyword = '%' + keyword + '%'
		conn.getConnection((err,connect)=> {
			connect.query(`select * from goods where goods_name like ?`, [keyword, page, size], function (_, res) {
				resolve(res)
			})
			connect.release()
		})
	})
}

async function getTotal(){
	
	return new Promise(resolve=>{
		conn.getConnection((err,connect)=> {
			
			connect.query("select count(*) as total from goods", function (_, res) {
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
	const {query} = req
	// @ts-ignore
	const data = await getList(query)
	// const total = await getTotal();
	res.status(200).json(data)
}
