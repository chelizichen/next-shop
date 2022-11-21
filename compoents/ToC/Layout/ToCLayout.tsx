import ToCHead from "../Head";
import ToCBody from "../Body";
import ToCBottom from "../Bottom";
import React from "react";

type ToCProps = {
	children:React.ReactNode
}

export default function ToCLayout({children}:ToCProps){
	return <>
		<ToCHead></ToCHead>
		{
			children
		}
		<ToCBottom></ToCBottom>
	</>
}

