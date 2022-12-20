import {Card, Col, Row, Skeleton} from 'antd';
import React, {useEffect, useRef, useState} from 'react';
import { skill__card } from '../../../../types/skill';
import { getSeckillList } from '../../../../api/seckill';

/**
 * @秒杀页面 从后台 随机获得 3个商品种类 每个种类对应10个商品ID
 */




type toObj = {
	key:string,
	value:string[]
}[]

export default function SkillComponent() {
	
	const [load,setLoad] = useState(true)
	
	const skill_data = useRef<toObj>();
	
	
	useEffect(()=>{
		getSeckillList().then( ({data})=> {
			skill_data.current = data.data
			setTimeout(()=>{
				setLoad(!load)
			}, 2000)
		})
	},[])
	
	return (
		<div className="site-card-wrapper">
			<Row gutter={16}>
				<Skeleton active loading={load}>
				{
					skill_data.current?.map(el=>{
						return (
							<Col span={8}>
								<Card title={el.key} bordered={true} style={{textAlign:"center"}} >
										<div className={'seckill_items'}>
											{el.value.map((cld=>{
												return <div className={'seckill_item'}>{cld}</div>
											}))}
										</div>
								</Card>
							</Col>
						)
					})
				}
				</Skeleton>
				
				<style jsx scoped>{`
.seckill_items{
	text-align: center;
}

.seckill_item{
font-size: 18px;
margin: 3px 0;
color: #22252a;
}

`}</style>
			</Row>
		</div>
	)
}
