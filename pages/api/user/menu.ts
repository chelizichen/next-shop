// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import {user, userInfo, validate} from "../../../types/user";
import { getConn } from "../../../utils/db";
import Ret from "../../../utils/ret";

/**
 * 从Cookie 中获取数据
 */

async function hasPermission(data:userInfo){
	return new Promise(async(resolve,reject)=>{
		const db = await getConn();
		db.query(
			"select * from user where us_permission = ? and id = ?",
			[data.permission,data.userId],
			(err, result) => {
				if (err) reject(err);
				resolve(result);
			}
		);
	})
}

export async function getMenu(data: userInfo) {
	if(data.userId && data.permission){
		let ret = await hasPermission(data)
		if(!ret){
			return  []// 后续更改
		}
	}
	const db = await getConn();
	return new Promise((resolve, reject) => {
		db.query(
			"select * from menu",
			[data.permission],
			(err, result) => {
				if (err) reject(err);
				resolve(result);
			}
		);
	});
}

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	const { query } = req;
	// @ts-ignore
	const data = await getMenu(query);
	res.status(200).json(Ret.success(data));
}




