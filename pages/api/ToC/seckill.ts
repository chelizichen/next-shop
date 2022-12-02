/**
 * 随机获得5张商品轮播图
 */
import {conn} from "../../../utils/db";
import {NextApiRequest, NextApiResponse} from "next";
import Ret from "../../../utils/ret";

async function getData(){
	// const redis = await getRedis()
	// const ha sRedisData = await redis.get("data:carousel")
	return new Promise(async (resolve, reject) => {
		const connect =  (await conn)()
		
		connect.query(
      "select sort_type_name,goods_name from seckill,sort,goods where goods.sort_type_id = sort.id and seckill.go_id = goods.id limit 0,30",
      function (err, data) {
        if (err) {
          reject(err);
        }
        resolve(data);
      }
    );
	})
}

type toObj = {
	key:string,
	value:string[]
}[]


function toTypeObj(data:Array<{
	sort_type_name:string,
	goods_name:string;
}>){
	let newData:toObj = []
	
	data.forEach(el=>{
		if(!newData.some(so=>so.key == el.sort_type_name)){
			let obj = {
				key:el.sort_type_name,
				value:[] as string[]
			}
			obj.value.push(el.goods_name)
			newData.push(obj)
		}else {
			let index = newData.findIndex(so=>so.key == el.sort_type_name)
			newData[index].value.push(el.goods_name)
		}
	})
	
	return newData;
}

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	const data = await getData();
	let newData = toTypeObj(data)
	res.status(200).json(Ret.success(newData));
}