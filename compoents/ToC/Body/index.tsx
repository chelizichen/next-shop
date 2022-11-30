import CarouselComponent from "./Components/Carousel";
import SeckillComponent from "./Components/Seckill";
import SortComponent from "./Components/Sort";

/**
 * 轮播图
 * 特价
 * 分类
 * 功能「 商家入驻 」
 * 底部
 */
export default function ToCBody(){
	return (
		<>
			<CarouselComponent></CarouselComponent>
			<SeckillComponent></SeckillComponent>
			<SortComponent id={"1"}></SortComponent>
			<SortComponent id={"2"}></SortComponent>
			<SortComponent id={"3"}></SortComponent>
		</>
	);
}