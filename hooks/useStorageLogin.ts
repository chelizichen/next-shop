
// 复用已有的 token
import {useEffect, useState} from "react";
import {getMenu} from "../api/login";
import {userInfo} from "../types/user";

export function useMenu(data:Pick<userInfo,"userId"|"token"|"permission">){
	let [menu,setMenu] = useState()
	useEffect(()=>{
		let item = localStorage.getItem("token")
		if(item){
			getMenu(data).then(res=>{
				console.log(res.data)
				setMenu(res.data)
			})
		}
	},[])
	return menu
}