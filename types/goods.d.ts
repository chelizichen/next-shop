/**
 * 商品表
 */
type Goods = {
	sort_type_name:string; // 商品分类名称
	sort_type_id:number; // 商品分类ID
	sort_link:string; // 分类导航页面
	goods_name_id:number; // 商品ID
	goods_name:string; // 商品名称
	seller_name: string; // 商家名称
	seller_id:number; // 商家名称
}

/**
 * 分类Api
 */
type Sort = {
	[key in keyof Goods]: key extends "sort_type_id" | "sort_type_name" | "sort_link" ?Goods[key][]:never
}

/**
 * 商家表
 * 一个商家对多个数组
 */
type Seller = {
  [key in keyof Goods]: key extends "seller_id" | "seller_name"?Goods[key]:Goods[key][]
};

/**
 * 秒杀 或 分类表
 * 一个分类ID 和 分类名称 对应 多个商品 和 多个商品ID
 */

type Seckill = {
	[key in keyof Goods]: key extends
		"sort_type_id" |
		"sort_type_name"|
		"goods_name_id" |
		"goods_name" ? key extends "sort_type_id" |
			"sort_type_name" ? Goods[key]:Goods[key][]:never
}



