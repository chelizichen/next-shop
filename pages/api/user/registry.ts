import type { NextApiRequest, NextApiResponse } from "next";
import { user, validate } from "../../../types/user";
import {conn} from "../../../utils/db";
import Ret from "../../../utils/ret";

async function Login(data: user) {
	return new Promise((resolve, reject) => {
		conn.query(
			"insert into  user set ?",
			[{
				us_name:data.username,
				us_password:data.password,
				us_permission:2
			}],
			(err, result) => {
				if (err) reject(err);
				if(result.affectedRows == 1){
					resolve(result);
				}
			}
		);
	});
}

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	const { body } = req;
	const data = await Login(body);
	
	res.status(200).json(Ret.success(data));
}
