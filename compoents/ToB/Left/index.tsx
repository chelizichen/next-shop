import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Menu } from "antd";
import React, {useEffect, useState} from "react";
import {permission} from "../../../types/user";
import {useRouter} from "next/router";
import {menu_table} from "../../../types/menu";
import useMenuStore from "../../../store/module/menu";
import useHeadStore from "../../../store/module/head";

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



export default function ToBLeft(){

  let {menu,setMenu,getMenu} = useMenuStore()
  let {adminTag,setAdminTag,adminOpenKeys,setAdminOpenKeys} = useHeadStore()
  let router = useRouter()
  const onClick: MenuProps["onClick"] = (e) => {
    console.log("click ", e);
    setAdminTag(e.key)
    setAdminOpenKeys(e.keyPath[1])
    router.push(e.key)
  };

  useEffect(()=>{
    (async function(){
      const data =await getMenu()
      console.log('data',data.data.data)
      setMenu(data.data.data)
    }())
    // setMenu()
  },[])
  
  return (
    <Menu
      onClick={onClick}
      style={{ width: 256 }}
      defaultSelectedKeys={[adminTag]}
      defaultOpenKeys={[adminOpenKeys,adminTag]}
      selectedKeys={[adminOpenKeys,adminTag]}
      mode="inline"
      items={menu}
    />
  );
};

