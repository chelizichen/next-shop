import ToBLayout from "../../../compoents/ToB/Layout";
import React, {useEffect, useState} from "react";
import {GetServerSidePropsContext} from "next/types";

import {menu_table} from "../../../types/menu";
import {getSeckillList} from "../../api/ToB/seckill/list";
import {ColumnsType, TableProps} from "antd/es/table";
import {skill__table} from "../../../types/skill";
import {goods_table} from "../../../types/goods";
import {Button, message, Popconfirm, Table} from "antd";
import {useRouter} from "next/router";
import {del__seckill} from "../../../api/seckill";

function ActionComponent({record}:any){
	const router = useRouter()
	const [canSet,SetCanSet] = useState(false)
	function del_action(data:goods_table){
		del__seckill({id:data.id}).then(res=>{
			if(res.data.affectedRows>0){
				// router.reload()
				message.success('删除成功');
				SetCanSet(true)
			}
		})
	}
	const confirm = (e: React.MouseEvent<HTMLElement>) => {
		console.log(e);
		del_action(record)
	};
	const toUpdate = ()=>{
		router.push({
			pathname:"/admin/goods/update",
			query:record
		})
	}
	
	return (
		<div>
			<Button disabled={canSet} type={"primary"} onClick={toUpdate}>修改</Button>
			<Popconfirm
				title="Are you sure to delete this task?"
				// @ts-ignore
				onConfirm={confirm}
				okText="Yes"
				cancelText="No"
			>
				<Button disabled={canSet} type={"dashed"}>删除</Button>
			</Popconfirm>
		</div>
	)
}

const columns: ColumnsType<skill__table> = [
	{
		title: 'ID',
		dataIndex: 'id',
	},
	{
		title: '货物ID',
		dataIndex: 'go_id',
	},
	{
		title:"秒杀价格",
		dataIndex:"sk_price"
	},
	{
		title: '货物状态',
		dataIndex: 'sk_status',
	},
	{
		title: '操作',
		key: 'action',
		render: (_, record) => <ActionComponent record={record}></ActionComponent>,
	},
];


function SeckillComponent({list}:any){
	const onChange: TableProps<goods_table>['onChange'] = (pagination, filters, sorter, extra) => {
		console.log('params', pagination, filters, sorter, extra);
	};
	
	function handleOnSelect(record,selected,selectedRows){
		console.log(record)
		console.log(selected)
		console.log(selectedRows)
	}
	
	return (
		<Table
			columns={columns}
			dataSource={list}
			onChange={onChange}
			rowSelection={{
				type:"checkbox",
				onSelect:handleOnSelect
			}}
		/>
	)
}


export default function SellerPage({list}:any){
	useEffect(()=>{
		console.log('list',list)
	},[])
	return (
		
		<ToBLayout>
			<SeckillComponent list={JSON.parse(list)}></SeckillComponent>
		</ToBLayout>
	)
}



export async function getServerSideProps(props: GetServerSidePropsContext) {
	console.log(props.query) // { permission , userId }
	let list = await getSeckillList() as Array<menu_table&{key:React.Key}>
	list = list.map(el=>{
		el.key = el.id
		return el
	})
	
	return {
		props: {
			list:JSON.stringify(list)
		},
	};
}
