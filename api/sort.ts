import request from "../utils/request";
import {PamarmsId} from "../types/common";

export function getSortList(params:PamarmsId) {
	return request({
		url: "/ToC/sort",
		method: "get",
		params
	});
}

export function getSortName(params:PamarmsId){
	return request({
		url: "/ToC/get_sort_name",
		method: "get",
		params
	});
}

export function get_sort_list(){
	return request({
		url:"/ToC/get_sort_list"
	})
}

export function getTags(params:PamarmsId){
	return request({
		url:"/ToC/get_tags",
		params
	})
}