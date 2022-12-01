import Link from "next/link";

export default function ToBHead(){
	return (
		<div className={'ToBHead'}>
			<Link href={"/home"}>海集网电商管理平台</Link>
			<style jsx>{`
.ToBHead{
	color:white;
}
`}
			
			</style>
		</div>
	)
}