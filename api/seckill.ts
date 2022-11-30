import request from "../utils/request";

export function getSeckillList() {
  return request({
    url: "/ToC/seckill",
    method: "get",
  });
}
