/**
 * 随机获得5张商品轮播图
 */
import {conn} from "../../../utils/db";
import {NextApiRequest, NextApiResponse} from "next";
import Ret from "../../../utils/ret";

async function getCarouselData(){
	const connect =  (await conn)()
	
	return new Promise(async (resolve,reject)=>{
		connect.query("select * from carousel limit 0,10",function (err,data){
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
	const data = await getCarouselData();
	res.status(200).json(Ret.success(data));
}