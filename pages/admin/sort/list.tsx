import ToBLayout from "../../../compoents/ToB/Layout";
import React, {useEffect, useState} from "react";
import {GetServerSidePropsContext} from "next/types";
import {useRouter} from "next/router";
import {getSortList_ToB} from '../../api/ToB/sort/list'
import {ColumnsType, TableProps} from "antd/es/table";
import {goods_table} from "../../../types/goods";
import {Button, message, Popconfirm, Table} from "antd";
import {del__sort} from "../../../api/sort";
import {sort__table} from "../../../types/sort";

function ActionComponent({record}:any){
	const router = useRouter()
	const [canSet,SetCanSet] = useState(false)
	function del_action(data:goods_table){
		del__sort({id:data.id}).then(res=>{
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
	
	return (
		<div>
			<Button disabled={canSet} type={"primary"}>修改</Button>
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

const columns: ColumnsType<sort__table> = [
	{
		title: 'ID',
		dataIndex: 'id',
	},
	{
		title:"父分类ID",
		dataIndex:"sort_root_id"
	},
	{
		title: '分类名称',
		dataIndex: 'sort_type_name',
	},
	{
		title:"是否为父菜单",
		dataIndex:"sort_is_root"
	},
	{
		title: '分类链接',
		dataIndex: 'sort_link',
	},
	{
		title: '操作',
		key: 'action',
		render: (_, record) => <ActionComponent record={record}></ActionComponent>,
	},
];

function SortComponent({list}:any){
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


export default function SortPage({query,list}:any){
	const router = useRouter()
	
	useEffect(()=>{
		console.log(query)
	},[])
	return (
		<ToBLayout>
			<SortComponent list={JSON.parse(list)}></SortComponent>
		</ToBLayout>
	)
}

export async function getServerSideProps(props: GetServerSidePropsContext) {
	
	const {query} = props
	// @ts-ignore
	let list = await getSortList_ToB(query)
	// @ts-ignore
	list = list.map(el=>{
		el.key = el.id
		return el
	})
	return {
		props:{
			query,
			list:JSON.stringify(list)
		}
	}
}
