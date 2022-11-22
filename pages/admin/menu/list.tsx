import ToBLayout from "../../../compoents/ToB/Layout";
import {GetServerSideProps} from "next";
import {GetServerSidePropsContext} from "next/types";
import {userInfo} from "../../../types/user";
import {getConn} from "../../../utils/db";
import {getMenu} from "../../api/user/menu";

/**
 * 菜单管理页面
 * Menu List
 */
export default function MenuPage({menu}:any){
	console.log(menu)
	return (
		
		<ToBLayout>
			<div>
				Menu Page
			</div>
		</ToBLayout>
	)
}
/**
 * 获得 USERID 和 MENU
 */
export async function getServerSideProps(props: GetServerSidePropsContext) {
	console.log(props.query) // { permission , userId }
	// @ts-ignore
	const menu = await getMenu(props.query)
	console.log(menu)
	
	return {
		props: {
			menu:JSON.stringify(menu)
		},
	};
}
