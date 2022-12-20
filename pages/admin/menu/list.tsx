import ToBLayout from "../../../compoents/ToB/Layout";
import {GetServerSideProps} from "next";
import {GetServerSidePropsContext} from "next/types";
import {user_table, userInfo} from "../../../types/user";
import {getMenu} from "../../api/user/menu";
import {useRouter} from "next/router";
import React, {useState} from "react";
import {Button, Menu, message, Popconfirm, Table} from "antd";
import {ColumnsType, TableProps} from "antd/es/table";
import {is_root, menu_table} from "../../../types/menu";
import {del_menu} from "../../../api/menu";

function MenuComponent({record}:any){
	const router = useRouter()
	const [canSet,SetCanSet] = useState(false)
	function del_action(data:user_table){
		del_menu({id:data.id}).then(res=>{
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
				onConfirm={confirm}
				okText="Yes"
				cancelText="No"
			>
				<Button disabled={canSet} type={"dashed"}>删除</Button>
			</Popconfirm>
		</div>
	)
}

// id:number;
// us_permission:number; // 菜单所需要的权限
// me_name:string; // 菜单名称
// me_path:string; // 菜单路径
// me_is_root:is_root // 是否为外层
// me_root_id:number; // 为外层时父菜单ID

const columns: ColumnsType<menu_table> = [
	{
		title: '菜单名',
		dataIndex: 'me_name',
	},
	{
		title: '菜单路径',
		dataIndex: 'me_path',
	},
	{
		title: '是否为父菜单',
		dataIndex: 'me_is_root',
		render:function (_,record){
			return <div>{record.me_root_id?"是":"否"}</div>
		}
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
		render: (_, record) => <MenuComponent record={record}></MenuComponent>,
	},
];

function MenuList({list}:any){
	const onChange: TableProps<user_table>['onChange'] = (pagination, filters, sorter, extra) => {
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

/**
 * 菜单管理页面
 * Menu List
 */
export default function MenuPage({list}:any){
	return (
		
		<ToBLayout>
			<MenuList list={JSON.parse(list)}></MenuList>
		</ToBLayout>
	)
}
/**
 * 获得 USERID 和 MENU
 */
export async function getServerSideProps(props: GetServerSidePropsContext) {
	console.log(props.query) // { permission , userId }
	// @ts-ignore
	let list = await getMenu(props.query) as Array<menu_table&{key:React.Key}>
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


