import {Card, Col, Row, Skeleton} from 'antd';
import React, {useEffect, useState} from 'react';

/**
 * @秒杀页面 从后台随机获得 3个商品种类 每个种类对应10个商品ID
 */

// function TestApi(fn:()=>void){
// 	return new Promise((resolve,reject)=>{
// 		setTimeout(()=>{
// 			fn()
// 			console.log(1)
// 			resolve(true)
// 		},0)
// 	})
// }



function SkillList({sort_type_name,goods_name}:skill__table){
	return(
		<div>
			<div className={"sort_type_name"}>{sort_type_name}</div>
			<style jsx>{`
.sort_type_name{
	font-size: 20px;
	font-weight: 900;
}
`}
			</style>
			{
				goods_name.map((el,index)=>{
					return(
						<div key={index}>
							{el}
						</div>
					)
				})
			}
		</div>
	)
}

export default function SkillComponent() {
	
	const [load,setLoad] = useState(true)
	
	useEffect(()=>{
		setTimeout(()=>{
			setLoad(!load)
		},2000)
	},[])
	
	return (
		<div className="site-card-wrapper">
			<Row gutter={16}>
				<Col span={8}>
					<Card title="Card title" bordered={false}>
						<Skeleton active loading={load}>
							Card content
						</Skeleton>
					</Card>
				</Col>
				<Col span={8}>
					<Card title="Card title" bordered={false}>
						<Skeleton active loading={load}>
							Card content
						</Skeleton>
					</Card>
				</Col>
				<Col span={8}>
					<Card title="Card title" bordered={false}>
						<Skeleton active loading={load}>
							Card content
						</Skeleton>
					</Card>
				</Col>
			</Row>
		</div>
	)
}
