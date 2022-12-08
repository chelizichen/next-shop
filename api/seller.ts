import {PamarmsId} from "../types/common";
import request from "../utils/request";

export function del__seller(params:PamarmsId){
	return request({
		url:"/ToB/seller/del",
		params
	})
}