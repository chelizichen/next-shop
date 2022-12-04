
import {conn} from "../../../utils/db";
import {NextApiRequest, NextApiResponse} from "next";
import Ret from "../../../utils/ret";

export async function getSortList(){
	return new Promise(async (resolve,reject)=>{
		conn.getConnection((err,connect)=> {
			
			
			connect.query("select * from sort where sort_is_root = 1  limit 0,10 ", function (err, data) {
				if (err) {
					reject(err)
				}
				resolve(data)
			})
			connect.release()
			
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