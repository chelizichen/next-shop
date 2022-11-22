import create from 'zustand'
import {userInfo} from "../../types/user";
import {menu_items, menu_table} from "../../types/menu";
import {getMenu} from "../../api/login";


interface Menu {
	menu: menu_items
	setMenu: (items: menu_items) => void
	getMenu:()=>any
}


/**
 * 登陆后存储到本地或从Local获取的数据
 */
const useMenuStore = create<Menu>()((set) => ({
	menu:[],
	setMenu: (items:menu_items) =>{
		let getMenus = createMenu(items)
		set({menu:getMenus})
	},
	getMenu:async ()=>{
		let item = localStorage.getItem("userInfo")
		let tojson = {}
		if(!item){
			tojson = {
				userId : 1,
				permission:4
			}
		}else {
			tojson = JSON.parse(item)
		}
		// @ts-ignore
		const data = await getMenu(tojson)
		return data
	}
}))

export function createMenu(menu:menu_table[]){
	const rootMenu = menu.filter(el=>el.me_is_root == 1)
	const childMenu = menu.filter(el=>el.me_is_root == 0)
	const newMenu = rootMenu.map(root_item=>{
		let childItems = [] as any
		childMenu.forEach(child_item=>{
			if(root_item.id == child_item.me_root_id){
				let item = {
					label:child_item.me_name,
					key:"/admin/"+root_item.me_path+"/"+child_item.me_path
				}
				childItems.push(item)
			}
		})
		let root = {
			label:root_item.me_name,
			key:root_item.me_path,
			children:childItems
		}
		return root
	})
	return newMenu
}


export default useMenuStore