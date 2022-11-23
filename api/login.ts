import { validate, user, userInfo } from "./../types/user.d";
import request from "../utils/request";

// ret ->  user_permission 1 2 3 4
export function login(data: user & validate) {
  return request({
    url: "/user/login",
    method: "post",
    data,
  });
}

// 注册
export function registry(data:user) {
  return request({
    url: "/user/registry",
    method: "post",
    data,
  })
}

export function getMenu(data:Pick<userInfo,"userId"|"permission">){
  return request({
    url: "/user/menu",
    method: "get",
    data,
  })
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


