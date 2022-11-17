export type user = {
  username: string;
  password: string;
};

export type validate = {
  code: string; // 验证码
  remember: boolean; // 是否存入 cookie
};

enum permission {
  super = 1, // 超级管理员
  seller = 2, // 商家
  custumer = 3, // 消费者
  visitor = 4, // 访客
}

export type userInfo = {
  userId: number;
  permission: permission;
  menu: any;
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
