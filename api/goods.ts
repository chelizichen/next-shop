import {PamarmsId} from "../types/common";
import request from "../utils/request";

export function del_goods(params:PamarmsId){
	return request({
		url:"/ToB/goods/del",
		params
	})
}