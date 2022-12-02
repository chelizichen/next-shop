export default function Tags({tags}:any){
		return(
			<div>
				{
					tags.map(el=>{
						return <div key={el.id}>
							{el.sort_type_name}
						</div>
					})
				}
			</div>
		)
}