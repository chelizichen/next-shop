/**
 * 获得各种分类的信息
 * 使用分页进行控制
 */
/**
 * 分类ID和分类商品ID
 * 随机获得商品Id
 */

type Pick_Sort = Pick<Seckill,"sort_type_name"|"goods_name">

function SortList({sort_type_name,goods_name}:Pick_Sort){
	return(
		<div>
			<h1>{sort_type_name}</h1>
			{
				goods_name.map((el,index)=>{
					return (
						<div key={index}>{el}</div>
					)
				})
			}
		</div>
	)
}

type SortComponentType = {
	data:Pick_Sort[]
}

export default function SortComponent(props:SortComponentType){
	const { data } = props
	return(
		<div>
			{data.map(el=>{
				return (
					<SortList sort_type_name={el.sort_type_name} goods_name={el.goods_name} ></SortList>
				)
			})}
		</div>
	)
	
}