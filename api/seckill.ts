import request from "../utils/request";
import {PamarmsId} from "../types/common";

export function getSeckillList() {
  return request({
    url: "/ToC/seckill",
    method: "get",
  });
}

export function del__seckill(params:PamarmsId){
  return request({
    url:"/ToB/seckill/del",
    params
  })
}