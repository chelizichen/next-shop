import {conn} from "../../../utils/db";
import {NextApiRequest, NextApiResponse} from "next";
import Ret from "../../../utils/ret";

async function getSortData(id:string){
	return new Promise(async (resolve,reject)=>{
		const connect =  (await conn)()
		
		connect.query("select * from goods,seller where goods.id = ? and  goods.seller_id = seller.id; ",[id],function (err,data){
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