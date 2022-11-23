import { Button, Input } from "antd";
import { useRouter } from "next/router";
import { useRef } from "react";
import useInfoStore from "../../../store/module/info";
import {InputRef} from "antd/lib/input/Input";

/**
 * HTTP 请求
 */
export default function RegistryPage() {
	const username = useRef<InputRef>();
	const password = useRef<InputRef>();
	const router = useRouter();
	const  { runRegistry,runLogin } = useInfoStore()
	function submit() {
		
		if(username.current && password.current){
			let data = {
				// @ts-ignore
				username : username.current?.input.value,
				// @ts-ignore
				password :password.current?.input.value,
				
			} as any
      runRegistry(data).then(res=>{
				if(res.data.code == 0){
					data.remember = true
					runLogin(data).then(res=>{
						if(res.data.code == 0){
							router.replace('/home')
						}
					})
				}
      })
			
		}
	}
	
	return (
		<div>
			用户名：
			<Input ref={username} />
			密码：
			<Input ref={password} />
			<Button onClick={submit}>注册</Button>
		</div>
	);
}
