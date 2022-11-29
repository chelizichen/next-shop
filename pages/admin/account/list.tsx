import ToBLayout from "../../../compoents/ToB/Layout";
import {getAccountList} from "../../api/ToB/account/list";
import type { ColumnsType, TableProps } from 'antd/es/table';
import React, {useContext, useRef, useState} from 'react';
import {Button, message, Modal, Popconfirm, Table} from "antd";
import {del_user} from "../../../api/user";
import {useRouter} from "next/router";
import {user_table} from "../../../types/user";


const Visiable = React.createContext({}) as any


function UpdateComponent({open,data}:any){

	const setOpen = useContext(Visiable) as any
	
	const handleOk = (e: React.MouseEvent<HTMLElement>) => {
		console.log(e);
		setOpen(false)
	};
	
	const handleCancel = (e: React.MouseEvent<HTMLElement>) => {
		console.log(e);
		setOpen(false)
	};
	
	return(
		<Modal
			title="Basic Modal"
			open={open}
			onOk={handleOk}
			onCancel={handleCancel}
			okButtonProps={{ disabled: false }}
			cancelButtonProps={{ disabled: false }}
		>
			<p>Some contents...</p>
			<p>Some contents...</p>
			<p>Some contents...</p>
			<p>{data}</p>
		</Modal>
	)
}

function ActionComponent({record}:any){
	const router = useRouter()
	const [canSet,SetCanSet] = useState(false)
	function del_action(data:user_table){
		del_user({id:data.id}).then(res=>{
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
	
	const setOpen = useContext(Visiable) as Function
	
	return (
		<div>
			<Button disabled={canSet} type={"primary"} onClick={()=>setOpen(true,2)}>修改</Button>
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

const columns: ColumnsType<user_table> = [
	{
		title: '用户名',
		dataIndex: 'us_name',
	},
	{
		title: '密码',
		dataIndex: 'us_password',
	},
	{
		title: '电话',
		dataIndex: 'us_phone',
	},
	{
		title: '权限等级',
		dataIndex: 'us_permission',
		sorter: (a,b) => a.us_permission - b.us_permission,
		defaultSortOrder: 'descend',
	},
	{
		title: '操作',
		key: 'action',
		render: (_, record) => <ActionComponent record={record}></ActionComponent>,
	},
];

function AccountList({list}:any){
	const onChange: TableProps<user_table>['onChange'] = (pagination, filters, sorter, extra) => {
		console.log('params', pagination, filters, sorter, extra);
	};
	
	function handleOnSelect(record:any,selected:any,selectedRows:any){
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

export default function AccountPage({list}:any){
	console.log('list',list)

	const [open,setOpen]  = useState(false)
	const [data,setData] = useState(1)

	function handleSetOpen(bool:boolean,data?:any){
		setOpen(bool)
		if(data){
			setData(data)
		}
	}
	
	return(
		<ToBLayout>
			<Visiable.Provider value={handleSetOpen}>
				<AccountList list={JSON.parse(list)}></AccountList>
				<UpdateComponent open={open} data={data}></UpdateComponent>
			</Visiable.Provider>
		</ToBLayout>
	)
}


export async function getServerSideProps() {
	let accountList = await getAccountList() as user_table[]
	accountList = accountList.map(el=>{
		el.key = el.id
		return el
	})

	return {
		props: {
			list:JSON.stringify(accountList)
		},
	};
}
