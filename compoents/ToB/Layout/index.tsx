import React from "react";
import ToBHead from "../Head";
import ToBLeft from "../Left";
import {Layout} from "antd";

type ToCLayout = {
	children:React.ReactNode;
}
export default function ToBLayout({children}:ToCLayout){
	return(
		<Layout>
			<Layout.Header>
				<ToBHead></ToBHead>
			</Layout.Header>
			<Layout>
				<div className={'content'}>
					<style jsx scoped={true}>{`
.content{
display: flex;
align-items: flex-start;
justify-content: space-between;
}
.content_right{
padding: 20px;
}
.content_right_in{
background-color: white;
box-shadow: 3px 5px 7px 5px gray;
padding: 20px;
}
`}
					</style>
					<ToBLeft></ToBLeft>
					<Layout.Content>
						<div className={"content_right"}>
							<div className={"content_right_in"}>
								{
									children
								}
							</div>
						</div>
					</Layout.Content>
				</div>
			</Layout>
		</Layout>
	)
}