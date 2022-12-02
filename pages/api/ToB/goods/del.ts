import {NextApiRequest, NextApiResponse} from "next";
import {delAccountById} from "../menu/del";
import {user_table} from "../../../../types/user";
import {conn} from "../../../../utils/db";


export async function delById(query:user_table){
	const connect =  (await conn)()

	return new Promise((resolve,reject)=>{
		connect.query("delete  from goods where id = ?",[query.id],(err,res)=>{
			resolve(res)
		})
	})
}

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	const {query} = req
	const data = await delById(query)
	res.status(200).json(data)
}
