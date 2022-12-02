import type { NextApiRequest, NextApiResponse } from 'next'
import {conn} from "../../../../utils/db";


export async function updateAccount(values:any[]){
	
	return new Promise((resolve,reject)=>{
		conn.getConnection((err,connect)=> {
			connect.query("update user  set ? where id = ?", (err, res) => {
				resolve(res)
			})
			connect.release()
			
		})
	})
}

export async function addAccount(values:any){
	return new Promise((resolve,reject)=>{
		conn.getConnection((err,connect)=> {
			connect.query("insert into user ?", [], (err, res) => {
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
	if(req.body.id){
		const data = await updateAccount(req.body)
		res.status(200).json(data)
		
	}else {
		const data = await addAccount(req.body)
			res.status(200).json(data)
		
	}
}
