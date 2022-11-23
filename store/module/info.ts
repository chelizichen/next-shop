import create from 'zustand'
import {user, userInfo, validate} from "../../types/user";
import {login, registry} from "../../api/login";


interface Info {
	info: userInfo
	setInfo: (info: userInfo) => void,
	runLogin:(data:user & validate)=>Promise<any>,
	runRegistry: (data:user)=>Promise<any>
}


/**
 * 登陆后存储到本地或从Local获取的数据
 */
const useInfoStore = create<Info>()((set,get) => ({
	info: {
		userId: 0,
		permission: 4,
		menu: [],
		phone: 0,
		token: ""
	},
	setInfo: (info:userInfo) =>{
		set({ info })
	},
	runLogin:async (data:user & validate)=>{
		const ret = await login(data)
		if(ret.data.code == 0 && ret.data.data && ret.data.data.length>0){
			const item = JSON.stringify(ret.data.data[0])
			localStorage.setItem("userInfo",item)
		}
		return ret
	},
	runRegistry:async (data)=>{
		const ret = await registry(data)
		if(ret.data.code == 0){
			return ret
		}
		return ret
	}
}))

export default useInfoStore