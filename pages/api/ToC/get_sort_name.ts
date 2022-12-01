
import {getConn} from "../../../utils/db";
import {NextApiRequest, NextApiResponse} from "next";
import Ret from "../../../utils/ret";

async function getSortName(id:string){
	return new Promise(async (resolve,reject)=>{
		const conn = await getConn()
		conn.query("select * from sort where id = ? ",[id],function (err,data){
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
	
	const data = await getSortName(query.id);
	
	res.status(200).json(Ret.success(data));
}