import create from 'zustand'


export enum HeadTags{
	HOME="主页",
	CAR="购物车",
	ADMIN="管理",
	SORT="分类"
}

interface HeadState {
	currTag: string
	setTag: (by: HeadTags) => void
}

/**
 * 找到当前的路径
 */
const useHeadStore = create<HeadState>()((set) => ({
	currTag: "主页",
	setTag: (tag:HeadTags) =>{
		set({ currTag:tag })
	}
}))

export default useHeadStore