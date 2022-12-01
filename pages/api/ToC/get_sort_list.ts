
import {getConn} from "../../../utils/db";
import {NextApiRequest, NextApiResponse} from "next";
import Ret from "../../../utils/ret";

export async function getSortList(){
	return new Promise(async (resolve,reject)=>{
		const conn = await getConn()
		conn.query("select * from sort  limit 0,10 ",function (err,data){
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
	const data = await getSortList();
	
	res.status(200).json(Ret.success(data));
}