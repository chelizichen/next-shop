/**
 * 随机获得5张商品轮播图
 */
import {getConn, getRedis} from "../../../utils/db";
import {NextApiRequest, NextApiResponse} from "next";
import Ret from "../../../utils/ret";

async function getCarouselData(){
	const redis = await getRedis()
	const hasRedisData = await redis.get("data:carousel")
	return new Promise(async (resolve,reject)=>{
		if(hasRedisData){
			resolve( hasRedisData)
		}else {
			const conn = await getConn()
			conn.query("select * from carousel limit 0,10",function (err,data){
				if(err){
					reject(err)
				}
				resolve(data)
			})
		}
	})

}
export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	const data = await getCarouselData();
	res.status(200).json(Ret.success(data));
}