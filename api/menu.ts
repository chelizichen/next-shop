import request from "../utils/request";
import {PamarmsId} from "../types/common";

export function del_menu(params:PamarmsId){
	return request({
		url:"/ToB/menu/del",
		method:"get",
		params
	})
}