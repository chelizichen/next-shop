import ToBLayout from "../../../compoents/ToB/Layout";
import React, {useState} from "react";
import {GetServerSidePropsContext} from "next/types";
import {getList} from "../../api/ToB/goods/list";
import {goods_table} from "../../../types/goods";
import {ColumnsType, TableProps} from "antd/es/table";
import {Button, message, Popconfirm, Table} from "antd";
import {useRouter} from "next/router";
import {del_goods} from "../../../api/goods";


// {id: number, sort_type_id: number, goods_name: string, goods_price: number, goods_rest_num: number, seller_id: number}

function ActionComponent({record}:any){
	const router = useRouter()
	const [canSet,SetCanSet] = useState(false)
	function del_action(data:goods_table){
		del_goods({id:data.id}).then(res=>{
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


const columns: ColumnsType<goods_table> = [
	{
		title: 'Id',
		dataIndex: 'id',
	},
	{
		title: '分类ID',
		dataIndex: 'sort_type_id',
	},
	{
		title: '商品名称',
		dataIndex: 'goods_name',
	},
	{
		title: '操作',
		key: 'action',
		render: (_, record) => <ActionComponent record={record}></ActionComponent>,
	},
]

function ListComponent({list}:any){
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

export default function GoodsListPage({list}:any){
	console.log('list',list)
	return(
		<ToBLayout>
			<div>货物列表</div>
			<ListComponent list={JSON.parse(list)}></ListComponent>
		</ToBLayout>
	)
}


export async function getServerSideProps(props: GetServerSidePropsContext) {
	console.log(props.query) // { permission , userId }
	let list = await getList({
		page:0,
		size:10,
		keyword:""
	}) as Array<goods_table&{key:React.Key}>
	
	return {
		props: {
			list:JSON.stringify(list)
		},
	};
}
