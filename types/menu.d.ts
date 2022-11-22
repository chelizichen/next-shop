
const enum is_root{
	true=1,
	false=0
}
export type menu_table = {
	id:number;
	us_permission:number; // 菜单所需要的权限
	me_name:string; // 菜单名称
	me_path:string; // 菜单路径
	me_is_root:is_root // 是否为外层
	me_root_id:number; // 为外层时父菜单ID
}

export type menu_items = MenuProps["items"]