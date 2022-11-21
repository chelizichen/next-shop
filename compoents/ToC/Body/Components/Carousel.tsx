import {Carousel} from "antd";
import React from "react";
import carousel_p1 from '/public/carousel/p1.jpeg'
import carousel_p2 from '/public/carousel/p2.jpeg'
import carousel_p3 from '/public/carousel/p3.jpeg'

const contentStyle: React.CSSProperties = {
	height: '160px',
	color: '#fff',
	lineHeight: '160px',
	textAlign: 'center',
	background: '#364d79',
};


const carousel_pics = [
	carousel_p1,
	carousel_p2,
	carousel_p3
]

/**
 * 向数据库发送请求 随机获得五张图片
 */
export default function CarouselComponent(){
	return (
		<div className={"carousel_out"}>
			<style jsx>
				{`
.carousel_out{
	width: 100%;
	padding: 0 10%;
	margin: 20px 0;
}
`
				}
			</style>
			<Carousel autoplay>
				{
					carousel_pics.map((el,index)=>{
						return (
								<img src={el.src} style={contentStyle} key={index} />
						)
					})
				}
			</Carousel>
		</div>
	);
}