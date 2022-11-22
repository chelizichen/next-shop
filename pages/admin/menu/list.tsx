import ToBLayout from "../../../compoents/ToB/Layout";
import {GetServerSideProps} from "next";
import {GetServerSidePropsContext} from "next/types";
import {userInfo} from "../../../types/user";
import {getConn} from "../../../utils/db";

/**
 * Menu List
 */


export default function MenuPage(props:any){
	console.log(props)
	return (
		<ToBLayout>
			<div>
				Menu Page
			</div>
		</ToBLayout>
	)
}
async function hasPermission(data:userInfo){
	return new Promise(async(resolve,reject)=>{
		const db = await getConn();
		db.query(
			"select * from user where us_permission = ? and id = ?",
			[data.permission,data.userId],
			(err, result) => {
				if (err) reject(err);
				resolve(result);
			}
		);
	})
}
async function getMenu(data: userInfo) {
	if(data.userId && data.permission){
		let ret = await hasPermission(data)
		console.log('hasPermission',hasPermission)
		if(!ret){
			return  // 后续更改
		}
	}
	const db = await getConn();
	return new Promise((resolve, reject) => {
		db.query(
			"select * from menu where us_permission = ?",
			[data.permission],
			(err, result) => {
				if (err) reject(err);
				resolve(result);
			}
		);
	});
}

/**
 * 获得 USERID 和 MENU
 */
export async function getServerSideProps(props: GetServerSidePropsContext) {
	console.log(props.query)
	// @ts-ignore query -> { permission , userId }
	const menu = await getMenu(props.query)
	console.log(menu)
	
	return {
		props: {
			data:{
				menu:[]
			}
		},
	};
}
