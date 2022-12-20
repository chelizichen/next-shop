import {GetServerSidePropsContext} from "next/types";
import {useEffect, useRef, useState} from "react";
import {one} from "../../api/goods";
import ToCLayout from "../../compoents/ToC/Layout";
import {goods_table} from "../../types/goods";
import {seller__table} from "../../types/seller";

type goodsPageProps = {
	query:{
		id:number;
	}
}

export default function goodsPage({query}:goodsPageProps){
	const [goodsInfo,setGoodsInfo] = useState<goods_table & seller__table>()
	
	useEffect(()=>{
		console.log(query)
		if(query.id){
			one({id:query.id}).then(res=>{
				setGoodsInfo(res.data.data[0])
				console.log(res.data.data[0])
			})
		}
	},[])
	
	return(
		<ToCLayout>
			<div className={'goods_info'}>
				<div className={'left_content'}>
					<img src={"/"+goodsInfo?.goods_pic}/>
				</div>
				<div className={'right_content'}>
					<div>{goodsInfo?.goods_name}</div>
					<div>海集价：{goodsInfo?.goods_price}</div>
					<div>剩余：{goodsInfo?.goods_rest_num}</div>
					<div>上架时间：{goodsInfo?.createTime}</div>
					<div>商家名称{goodsInfo?.se_name}</div>
					<div>商家公司：{goodsInfo?.se_company}</div>
					
				</div>
			</div>
			<style jsx scoped>{`
			.goods_info{
			display: flex;
			align-items: center;
			justify-content: space-between;
			width: 60%;
			margin: 0 20%;
			}`}</style>
		</ToCLayout>
	)
}

export async function getServerSideProps(props: GetServerSidePropsContext) {
	const {query} = props
	return {
		props: {
			query
		},
	};
}