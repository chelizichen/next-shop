import { Button, Input } from "antd";
import { useRouter } from "next/router";
import { useRef } from "react";

/**
 * HTTP 请求
 */
export default function LoginPage() {
	const username = useRef<HTMLInputElement>();
	const password = useRef<HTMLInputElement>();
	const router = useRouter();
	function submit() {}
	
	return (
		<div>
			用户名：
			<Input ref={username} />
			密码：
			<Input ref={password} />
			<Button onClick={submit}>登陆</Button>
		</div>
	);
}
