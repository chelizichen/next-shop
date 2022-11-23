import type { NextApiRequest, NextApiResponse } from 'next'
import {getConn} from "../../../../utils/db";


export async function updateAccount(values:any[]){
	const conn = await getConn()
	return new Promise((resolve,reject)=>{
		conn.query("update user  set ? where id = ?",(err,res)=>{
			resolve(res)
		})
	})
}

export async function addAccount(values:any){
	const conn = await getConn()
	return new Promise((resolve,reject)=>{
		conn.query("insert into user ?",[],(err,res)=>{
			resolve(res)
		})
	})
}


export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	if(req.body.id){
		const data = await updateAccount(req.body)
		res.status(200).json(data)
		
	}else {
		const data = await addAccount(req.body)
			res.status(200).json(data)
		
	}
}
