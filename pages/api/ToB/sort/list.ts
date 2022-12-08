
import {NextApiRequest, NextApiResponse} from "next";
import {Pagination} from "../../../../types/common";
import {conn} from "../../../../utils/db";
import Ret from "../../../../utils/ret";

export async function getSortList_ToB(query:Pagination) {
	return new Promise(async (resolve, reject) => {
		conn.getConnection((err, connect) => {
			const keyword = '%'+query.keyword + "%";
			// select * from sort where sort_type_name  like ? limit ?,?
			connect.query("select * from sort ", [keyword,query.page,query.size], function (err, data) {
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
	const {query} = req
	
	const data = await getSortList_ToB(query);
	
	res.status(200).json(Ret.success(data));
}