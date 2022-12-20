import {goods_table} from "../../../types/goods";
import {useRouter} from "next/router";

type goodsItemType = {
	goods:goods_table[]
}
export default function GoodItems({goods}:goodsItemType){
	const router = useRouter()
	function toGoodsInfo(id:any){
		router.push({
			pathname:"/goods",
			query:{
				id
			}
		})
	}
	
	return<div>
		<div className={'items'}>
			{
				goods.map(el=>{
					return <div className={"item"} key={el.id} onClick={()=>toGoodsInfo(el.id)}>
						<img src={"/"+el.goods_pic}/>
						<div>
							<div>商品名称：{el.goods_name}</div>
							<div>商品价格：{el.goods_price}</div>
						</div>
						<div>商品剩余：{el.goods_rest_num}</div>
						<div>商家ID：{el.seller_id}</div>
						<div>子分类ID：{el.sort_child_id}</div>
					</div>
				})
			}
			<style jsx scoped>
				{
					`
.intro{
display: flex;
align-items: center;
justify-content: space-between;
}
.items{
display: flex;
align-items: center;
flex-wrap: wrap;
justify-content: flex-start;
}
.item{
margin: 20px;
cursor: pointer;

}
`
				}
			</style>
		</div>
	</div>
}