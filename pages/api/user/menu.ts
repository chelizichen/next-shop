// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import {user, userInfo, validate} from "../../../types/user";
import { getConn, getRedis } from "../../../utils/db";
import Ret from "../../../utils/ret";

/**
 * 从Cookie 中获取数据
 */
async function getMenu(data: userInfo) {
	const db = await getConn();
	return new Promise((resolve, reject) => {
		db.query(
			"select * from menu where us_permission = ?",
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
	const { body,headers } = req;
	if(!headers['token']){
		res.status(401).json(Ret.error("没有token"))
	}
	const data = await getMenu(body);
	res.status(200).json(Ret.success(data));
}
