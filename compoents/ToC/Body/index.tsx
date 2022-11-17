import CarouselComponent from "./Components/Carousel";
import SkillComponent from "./Components/Skill";
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
			<SkillComponent></SkillComponent>
			<SortComponent></SortComponent>
		</>
	);
}