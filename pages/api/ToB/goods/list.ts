import {NextApiRequest, NextApiResponse} from "next";
import {getConn} from "../../../../utils/db";
import {Pagination} from "../../../../types/common";


export async function getList(pagination:Pagination){
	const conn = await getConn()
	return new Promise((resolve)=>{
		let {keyword,page,size} = pagination
		keyword = '%' + keyword + '%'
		conn.query(`select * from goods where goods_name like ?`,[keyword,page,size],function (_,res){
			resolve(res)
		})
	})
}

async function getTotal(){
	const conn = await getConn()
	return new Promise(resolve=>{
		conn.query("select count(*) as total from goods",function (_,res){
			resolve(res)
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
