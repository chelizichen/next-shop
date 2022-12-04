import {goods_table} from "../../../types/goods";

type goodsItemType = {
	goods:goods_table[]
}
export default function GoodItems({goods}:goodsItemType){
	return<>
		<div className={'items'}>
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
}
`
				}
			</style>
			
			{
				goods.map(el=>{
					return <div className={"item"} key={el.id}>
						<img src={'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png'}/>
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
		</div>
	</>
}