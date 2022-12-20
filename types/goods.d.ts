/**
 * 商品表
 */
export type goods_table = {
	id:number; // 商品ID
	sort_type_id:number; // 商品分类ID
	goods_name: string; // 商品名称
	goods_price: number; // 商品价格
	goods_rest_num: number; // 商品剩余数量
	seller_id:number; // 商家名称
	sort_child_id:string; // 分类所属子分类
	goods_pic:string;
	// createTime:Date;
}

/**
 * 分类Api
 */
// type Sort = {
// 	[key in keyof Goods]: key extends "sort_type_id" | "sort_type_name" | "sort_link" ?Goods[key][]:never
// }

/**
 * 商家表
 * 一个商家对多个数组
 */
// type Seller = {
//   [key in keyof Goods]: key extends "seller_id" | "seller_name"?Goods[key]:Goods[key][]
// };

/**
 * 秒杀 或 分类表
 * 一个分类ID 和 分类名称 对应 多个商品 和 多个商品ID
 */

// type Seckill = {
// 	[key in keyof Goods]: key extends
// 		"sort_type_id" |
// 		"sort_type_name"|
// 		"goods_id" |
// 		"goods_name" ? key extends "sort_type_id" |
// 			"sort_type_name" ? Goods[key]:Goods[key][]:never
// }



