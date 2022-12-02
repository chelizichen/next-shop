import {useEffect} from "react";
import ToCLayout from "../../compoents/ToC/Layout";
import RegistryPage from "../../compoents/ToC/Registry";
import {getTags} from "../api/ToC/get_tags";
import Tags from "../../compoents/ToC/Sort/Tags";


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
			<div>
				分类页面{data.query.sort_name}
			</div>
			<div>
				分类ID{data.query.sort_id}
			</div>
			<Tags tags={JSON.parse(data.tags)}></Tags>
		</ToCLayout>
	)
}

export async function getServerSideProps({ params,query }: any) {
	console.log(query)
	const Tags = await getTags(query.sort_id)
	console.log('Tags',Tags)
	// 获得 Tags 大标签与小标签
	// 获得 大的商品列表
	return {
		props: {
			data: {
				query,
				tags:JSON.stringify(Tags)
			},
		},
	};
}
