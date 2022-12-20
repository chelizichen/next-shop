import {PamarmsId} from "../types/common";
import request from "../utils/request";

export function del_goods(params:PamarmsId){
	return request({
		url:"/ToB/goods/del",
		params
	})
}

export function one(params:PamarmsId){
	return request({
		url:"/ToC/goods_info",
		params
	})
}

