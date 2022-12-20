/**
 * 获得各种分类的信息
 * 使用分页进行控制
 */
import {useEffect, useRef, useState} from "react";
import {getSortList, getSortName} from "../../../../api/sort";
import {goods_table} from "../../../../types/goods";
import {useRouter} from "next/router";

/**
 * 分类ID和分类商品ID
 * 随机获得商品Id
 */


export default function SortComponent({id}:any){
	const [sort_list,set_list] = useState<goods_table[]>()
	const [sort_name,set_name] = useState("")
	const router = useRouter()
	
	useEffect(()=>{
		getSortList({id}).then(res=>{
			set_list(res.data.data)
			console.log(res.data.data)
		})
		getSortName({id}).then(res=>{
			set_name(res.data.data[0].sort_type_name)
			console.log(res.data)
		})
	},[])
	function toGoodsInfo(id:any){
		router.push({
			pathname:"/goods",
			query:{
				id
			}
		})
	}
	
	
	return(
		<div>
			<div className={"sort_title"}>{sort_name}</div>
			<div className={"sort_items"}>
				{sort_list?.map(el=>{
					return(
						<div className={"sort_item"} key={el.id} onClick={()=>toGoodsInfo(el.id)}>
							<img src={el.goods_pic}/>
							<div>
								<div>商品名称：{el.goods_name}</div>
								<div>商品价格：{el.goods_price}</div>
							</div>
							<div>商品剩余：{el.goods_rest_num}</div>
							<div>商家ID：{el.seller_id}</div>
							<div>子分类ID：{el.sort_child_id}</div>
						</div>
					)
				})}
			</div>
			
			<style jsx scoped>{`
	.sort_title{
		font-size: 26px;
		margin-left: 20px;
	}
	.sort_items{
		display: flex;
	}
	.sort_item{
		margin: 10px;
		cursor: pointer;
	}
`}</style>
		</div>
	)
	
}