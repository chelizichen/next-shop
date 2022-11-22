
// 复用已有的 token
import {useEffect, useState} from "react";
import {getMenu} from "../api/login";
import {userInfo} from "../types/user";

const fn = async ()=>{
	let item = localStorage.getItem("userInfo")
	let tojson = {}
	if(!item){
		tojson = {
			userId : 1,
			permission:4
		}
	}else {
		tojson = JSON.parse(item)
	}
	// @ts-ignore
	const data = await getMenu(tojson)
	return data
}

export function useMenu(){
	let [menu,setMenu] = useState([])
	useEffect(()=>{
		(async function(){
			const data = await fn()
			console.log('data',data)
			setMenu(data.data.data)
		})()
	},[])
	return menu
}