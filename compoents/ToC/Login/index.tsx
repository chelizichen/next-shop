import { Button, Input } from "antd";
import { useRouter } from "next/router";
import { useRef } from "react";
import useInfoStore from "../../../store/module/info";
import {InputRef} from "antd/lib/input/Input";

/**
 * HTTP 请求
 */
export default function LoginPage() {
	const username = useRef<InputRef>();
	const password = useRef<InputRef>();
	const router = useRouter();
	const  { runLogin } = useInfoStore()
	function submit() {

		if(username.current && password.current){
			const data = {
				// @ts-ignore
				username : username.current?.input.value,
				// @ts-ignore
				password :password.current?.input.value,
				remember:true
			}
			runLogin(data).then(res=>{
				if(res.data.code == 0){
					router.push('/home')
				}
			})
		}
	}
	function registry(){
		router.replace('/registry')
	}
	return (
		<div>
			用户名：
			<Input ref={username} />
			密码：
			<Input ref={password} />
			<Button onClick={submit}>登陆</Button>
			<div onClick={registry}>没有账号？注册一个</div>
		</div>
	);
}
