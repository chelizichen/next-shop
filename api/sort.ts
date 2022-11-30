import request from "../utils/request";
import {PamarmsId} from "../types/common";

export function getSortList(params:PamarmsId) {
	return request({
		url: "/ToC/sort",
		method: "get",
		params
	});
}
