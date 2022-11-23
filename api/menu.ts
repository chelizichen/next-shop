import request from "../utils/request";

export function del_menu(params:PamarmsId){
	return request({
		url:"/ToB/menu/del",
		method:"get",
		params
	})
}