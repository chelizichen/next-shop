import create from 'zustand'
import {userInfo} from "../../types/user";


interface Info {
	info: userInfo
	setInfo: (info: userInfo) => void
}


/**
 * 登陆后存储到本地或从Local获取的数据
 */
const useInfoStore = create<Info>()((set) => ({
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
}))

export default useInfoStore