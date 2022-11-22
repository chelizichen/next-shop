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
align-items: center;
justify-content: space-between;
}
`}
					</style>
					<ToBLeft></ToBLeft>
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