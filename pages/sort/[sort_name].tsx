import {useEffect} from "react";
import ToCLayout from "../../compoents/ToC/Layout";
import RegistryPage from "../../compoents/ToC/Registry";
import {getGoodsAboutChildTag, getGoodsBySortId, getTags} from "../api/ToC/get_tags";
import Tags from "../../compoents/ToC/Sort/Tags";
import {Divider} from "antd";
import GoodItems from "../../compoents/ToC/Sort/GoodItem";


/**
 * 分为两层
 * 上层显示更多的分类向
 * 下层 根据 params.sort_name 得到关联的关键词进行模糊搜索
 */

export default function SortPage({data}:any){
	useEffect(()=>{
		console.log(data.query.sort_name)
		console.log(data.tags)
	},[])
	return(
		<ToCLayout>
			<Divider orientation="left">分类:{data.query.sort_name}</Divider>
			<Tags tags={JSON.parse(data.tags)}></Tags>
			<GoodItems goods={JSON.parse(data.goods)}></GoodItems>
		</ToCLayout>
	)
}

export async function getServerSideProps({ params,query }: any) {
	console.log(query)
	
	const Tags = query.sort_id?await getTags(query.sort_id):[]
	const GoodsBySortId = query.sort_id?await getGoodsBySortId(query.sort_id):[];
	
	const GoodsAboutChildTag = query.sort_child_id?await getGoodsAboutChildTag(query.sort_child_id):[]
	
	
	// 获得 Tags 大标签与小标签
	// 获得 大的商品列表
	return {
		props: {
			data: {
				query,
				tags:JSON.stringify(Tags),
				// @ts-ignore
				goods:GoodsBySortId.length?JSON.stringify(GoodsBySortId):JSON.stringify(GoodsAboutChildTag)  ,
			},
		},
	};
}
