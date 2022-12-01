import ToBLayout from "../../../compoents/ToB/Layout";
import React from "react";


function SellerComponent(){
	return (
		<div>SellerComponent</div>
	)
}


export default function SellerPage(){
	return (
		
		<ToBLayout>
			<SellerComponent></SellerComponent>
		</ToBLayout>
	)
}