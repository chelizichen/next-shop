import RecommendComponent from "./compoents/recommend";
import CarComponent from "./compoents/car";


/**
 * 使用服务段渲染完成
 * 根据 Id 获得  获得所添加的购物车
 * 主键 KEY ： ID
 * 购买商品ID : go_id
 * 购买商品数量 : go_num
 */
export default function CarPage({}:any) {
  return (
    <div>
        <CarComponent></CarComponent>
        <RecommendComponent></RecommendComponent>
    </div>
  );
}
