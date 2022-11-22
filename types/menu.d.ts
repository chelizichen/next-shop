const enum is_root{
	true=1,
	false=0
}
type menu_table = {
	id:number;
	us_permission:number; // 菜单所需要的权限
	me_name:string; // 菜单名称
	me_path:string; // 菜单路径
	me_is_root:is_root // 是否为外层
}