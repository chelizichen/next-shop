export type user = {
  username: string;
  password: string;
};

export type validate = {
  remember: boolean; // 是否存入 cookie
};

export enum permission {
  super = 4, // 超级管理员
  seller = 3, // 商家
  customer = 2, // 消费者
  visitor = 1, // 访客
}

export type userInfo = {
  userId: number;
  permission: permission;
  phone: number;
  token: string;
};

// 购物车
export type cu_car = {
  userId: number;
  goodsId: number;
  goodsNum: number;
};

// 购买记录
export type cu_history = {
  userId: number;
  goodsId: number;
  goodsNum: number;
};
