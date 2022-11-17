import {
  CodepenOutlined,
  TableOutlined,
  UserOutlined,
  DatabaseOutlined,
  ShoppingCartOutlined
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Menu } from "antd";
import Link from "next/link";
import React, {useEffect, useState} from "react";
import Image from "next/image";
function SeaC() {
  return (
    <Link href={"/home"}>
      <Image src="/logo.jpeg" alt="Logo" width={60} height={60} />
    </Link>
  );
}

const leftItems: MenuProps["items"] = [
  {
    label: SeaC(),
    key: "图标",
  },
  {
    label: <Link href={"/home"}>主页</Link>,
    key: "主页",
    icon: <CodepenOutlined />,
  },
  {
    label: "分类",
    key: "分类",
    icon: <DatabaseOutlined />,
    children: [
      {
        type: "group",
        label: "类别1",
        children: [
          {
            label: "Option 1",
            key: "setting:1",
          },
          {
            label: "Option 2",
            key: "setting:2",
          },
        ],
      },
      {
        type: "group",
        label: "类别2",
        children: [
          {
            label: "Option 3",
            key: "setting:3",
          },
          {
            label: "Option 4",
            key: "setting:4",
          },
        ],
      },
    ],
  },
];

const rightItems: MenuProps["items"] = [
  {
    label: <Link href={"/admin"}>购物车</Link>,
    key:"购物车",
    icon:<ShoppingCartOutlined />
  },
  
  {
    label: <Link href={"/admin"}>管理</Link>,
    key: "管理",
    icon: <TableOutlined />,
    disabled: true,
  },
  {
    label: <Link href={"/login"}>登陆</Link>,
    key: "登陆",
    icon: <UserOutlined />,
  },
];
function ToCHead() {
  const [RightItem,SetRightItem] = useState([])
  
  // 首次运行
  useEffect(()=>{
    const permission = localStorage.getItem("permission")
    if(permission == "2" || permission == "1"){
      const newItem = rightItems?.filter(el=>{
         // @ts-ignore
        return el.key != "管理"
      })
      // @ts-ignore
      SetRightItem((newItem))
    }
    console.log(permission)
  },[])
  
  const [current, setCurrent] = useState("mail");

  const onClick: MenuProps["onClick"] = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };

  return (
    <div className="flex_space_between head">
      <Menu
        onClick={onClick}
        selectedKeys={[current]}
        mode="horizontal"
        items={leftItems}
        style={{ width: "400px", height: "60px" }}
      />
      <Menu
        onClick={onClick}
        selectedKeys={[current]}
        mode="horizontal"
        items={RightItem}
        className={"head"}
        style={{ height: "60px" }}
      />
      <style jsx>{`
        .head {
          height: 60px;
          padding-top: 10px;
        }
      `}</style>
    </div>
  );
}

export default ToCHead;
