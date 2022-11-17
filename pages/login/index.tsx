import { Button, Input } from "antd";
import { useRouter } from "next/router";
import { useRef } from "react";

export default function Login() {
  const username = useRef<HTMLInputElement>();
  const password = useRef<HTMLInputElement>();
  const router = useRouter();
  function submit() {
    // console.log(username.current?.input.value);
    // console.log(password.current?.input.value);
    // if (password == "123") {
    //   router.push("/home");
    // } else {
    //   router.push("/admin");
    // }
  }

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
