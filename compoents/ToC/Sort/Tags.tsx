import {sort__table} from "../../../types/sort";
import {Tag} from "antd";
import Link from "next/link";

type TagsType = {
	tags:sort__table[]
}

export default function Tags({tags}:TagsType){
		return(
			<div className={"tags"}>
				{
					tags.map(el=>{
						return <Tag color={"blue"} key={el.id}>
							<Link href={{
								pathname:'/sort/'+el.sort_link,
								query:{
									sort_child_id:el.id
								}
							}}>
								{el.sort_type_name}
							</Link>
						</Tag>
					})
				}
				<style jsx>{
					`
.tags{
width:100%;
padding: 0 20px 10px 20px;
}
`
				}
				</style>
			</div>
		)
}