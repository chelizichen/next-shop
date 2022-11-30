/**
 * 随机获得5张商品轮播图
 */
import {getConn} from "../../../utils/db";
import {NextApiRequest, NextApiResponse} from "next";
import Ret from "../../../utils/ret";

async function getSortData(id:string){
	return new Promise(async (resolve,reject)=>{
			const conn = await getConn()
			conn.query("select * from goods where sort_type_id = ? limit 0,10 ",[id],function (err,data){
				if(err){
					reject(err)
				}
				resolve(data)
			})
	})
	
}
export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	const {query} = req
	
	const data = await getSortData(query.id);
	
	res.status(200).json(Ret.success(data));
}