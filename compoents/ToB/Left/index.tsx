import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Menu } from "antd";
import React, {useEffect} from "react";
import {permission} from "../../../types/user";
import {useRouter} from "next/router";

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: "group"
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

/**
 * 通过 Info 获得 Permission
 * 超级管理员 分配菜单
 * 商家 使用菜单
 */

// MenuProps["items"]
async function generateMenu(Permission:permission){
  const router = useRouter()
  if(Permission == 1 || Permission == 2){
    router.replace('/home')
  }
  if(Permission == 3){
    // return await
  }
  return
}

const items: MenuProps["items"] = [
  getItem("Navigation One", "sub1", <MailOutlined />, [
    getItem("Option 1", "1"),
    getItem("Option 2", "2"),
  ]),
  getItem("Navigation One", "sub1", <MailOutlined />, [
    getItem("Option 1", "1"),
    getItem("Option 2", "2"),
  ]),
  getItem("Navigation One", "sub1", <MailOutlined />, [
    getItem("Option 1", "1"),
    getItem("Option 2", "2"),
  ]),
];

export default function ToBLeft({menu}:any){
  const onClick: MenuProps["onClick"] = (e) => {
    console.log("click ", e);
  };
  useEffect(()=>{
    console.log('menu',menu)
  })

  return (
    <Menu
      onClick={onClick}
      style={{ width: 256 }}
      defaultSelectedKeys={["1"]}
      defaultOpenKeys={["sub1"]}
      mode="inline"
      items={items}
    />
  );
};

