import request from "../utils/request";

export function del_user(params:PamarmsId){
	return request({
		url:"/ToB/account/del",
		method:"get",
		params
	})
}