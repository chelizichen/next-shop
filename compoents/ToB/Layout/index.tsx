import React from "react";
import ToBHead from "../Head";
import ToBLeft from "../Left";
import {Layout} from "antd";
type ToCLayout = {
	children:React.ReactNode;
	menu:menu_table[];
}
export default function ToBLayout({children,menu}:ToCLayout){
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
align-items: center;
justify-content: space-between;
}
`}
					</style>
					<ToBLeft menu={menu}></ToBLeft>
					<Layout.Content>
						{
							children
						}
					</Layout.Content>
				</div>
			</Layout>
		</Layout>
	)
}