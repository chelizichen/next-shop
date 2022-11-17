import { validate, user, userInfo } from "./../types/user.d";
import request from "../utils/request";

// ret ->  user_permission 1 2 3 4
export function login(data: user & Pick<validate, "code">) {
  return request({
    url: "login",
    method: "post",
    data,
  });
}

// 获取消费者信息
// 获得购物车表 && 收藏
// 获得购买记录
// 获得浏览记录 Redis
export function getCustumerInfo(params: Pick<userInfo, "userId">) {
  return request({
    url: "getInfo",
    method: "get",
    params,
  });
}

// 获得管理员菜单
export function getBusinessMenu(params: Pick<userInfo, "permission">) {}

// 注册
export function registry() {}
