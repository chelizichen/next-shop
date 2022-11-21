import create from "zustand";
import {getCustumerInfo} from "../../api/login";

const useInfoStore = create((set,get)=>({
	userInfo:{},
	setInfo:async (info:any)=>{
		const data = await getCustumerInfo({userId:info.id})
		set({
			userInfo:data
		})
	}
}))


export default  useInfoStore