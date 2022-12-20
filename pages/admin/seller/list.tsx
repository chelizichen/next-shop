import ToBLayout from "../../../compoents/ToB/Layout";
import React, {useState} from "react";
import {getSellerList} from "../../api/ToB/seller/list";
import {GetServerSidePropsContext} from "next/types";
import {ColumnsType, TableProps} from "antd/es/table";
import {goods_table} from "../../../types/goods";
import {Button, message, Popconfirm, Table} from "antd";
import {seller__table} from "../../../types/seller";
import {useRouter} from "next/router";
import {del__seller} from "../../../api/seller";

function ActionComponent({record}:any){
	const router = useRouter()
	const [canSet,SetCanSet] = useState(false)
	function del_action(data:goods_table){
		del__seller({id:data.id}).then(res=>{
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



const columns: ColumnsType<seller__table> = [
	{
		title: 'ID',
		dataIndex: 'id',
	},
	{
		title:"商家名称",
		dataIndex:"se_name"
	},
	{
		title: '商家所属公司',
		dataIndex: 'se_company',
	},
	{
		title:"介绍",
		dataIndex:"se_intro"
	},
	{
		title: '创建时间',
		dataIndex: 'createTime',
	},
	{
		title: '操作',
		key: 'action',
		render: (_, record) => <ActionComponent record={record}></ActionComponent>,
	},
];

function SellerComponent({list}:any){
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
	return (
		
		<ToBLayout>
			<SellerComponent list={JSON.parse(list)}></SellerComponent>
		</ToBLayout>
	)
}


export async function getServerSideProps(props: GetServerSidePropsContext) {
	
	const {query} = props
	// @ts-ignore
	let list = await getSellerList(query)
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

