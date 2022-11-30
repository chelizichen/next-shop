/**
 * 获得各种分类的信息
 * 使用分页进行控制
 */
import {useEffect, useRef, useState} from "react";
import {getSortList} from "../../../../api/sort";
import {goods_table} from "../../../../types/goods";

/**
 * 分类ID和分类商品ID
 * 随机获得商品Id
 */

type Pick_Sort = Pick<Seckill,"sort_type_name"|"goods_name">

// function SortList({sort_type_name,goods_name}:Pick_Sort){
// 	return(
// 		<div>
// 			<h1>{sort_type_name}</h1>
// 			{
// 				goods_name.map((el,index)=>{
// 					return (
// 						<div key={index}>{el}</div>
// 					)
// 				})
// 			}
// 		</div>
// 	)
// }



export default function SortComponent({id}:any){
	const [sort_list,set_list] = useState<goods_table[]>()
	useEffect(()=>{
		getSortList({id}).then(res=>{
			set_list(res.data.data)
		})
	},[])
	
	return(
		<div>
			{sort_list?.map(el=>{
				return(
					<div>{el.goods_name}</div>
				)
			})}
		</div>
	)
	
}