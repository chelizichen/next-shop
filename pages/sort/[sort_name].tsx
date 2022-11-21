import {useEffect} from "react";


/**
 * 分为两层
 * 上层显示更多的分类向
 * 下层 根据 params.sort_name 得到关联的关键词进行模糊搜索
 */

export default function SortPage({data}:any){
	useEffect(()=>{
		console.log(data.params.sort_name)
	},[])
	return(
		<div>
			分类页面{data.params.sort_name}
		</div>
	)
}

export async function getServerSideProps({ params }: any) {
	
	return {
		props: {
			data: {
				params,
			},
		},
	};
}
