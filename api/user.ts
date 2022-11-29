import request from "../utils/request";
import {PamarmsId} from "../types/common";

export function del_user(params:PamarmsId){
	return request({
		url:"/ToB/account/del",
		method:"get",
		params
	})
}