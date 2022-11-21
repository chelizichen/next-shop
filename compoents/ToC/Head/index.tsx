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
import useHeadStore, {HeadTags} from "../../../store/module/head";

function SeaC() {
  return (
    <Link href={"/home"}>
      <Image src="/logo.jpeg" alt="Logo" width={60} height={60} />
    </Link>
  );
}

function SortLabelItem(data:Sort):MenuProps["items"]{
  if(!data || !data.sort_type_name.length){
    // @ts-ignore
    data = {
      sort_type_name:['分类1','分类2'],
      sort_link:['sort1','sort2']
    }
  }
  const children = data.sort_link.map((el,index)=>{
    return {
      key:el,
      label:<Link href={'/sort/'+el}>{data.sort_type_name[index]}</Link>
    }
  })
  return children
}

const leftItems = (data:Sort): MenuProps["items"]=>{
  
  const children = SortLabelItem(data)
  
  return ([
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
    children,
  },
])}

const rightItems: MenuProps["items"] = [
  {
    label: <Link href={"/car"}>购物车</Link>,
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

type HeadProps = {
  Sort:Sort
}

function ToCHead({Sort}:HeadProps) {
  const [RightItem,SetRightItem] = useState([])
  
  // 首次运行
  useEffect(()=>{
    // 判断权限
    const permission = localStorage.getItem("permission")
    if(permission == "2" || permission == "1"){
      const newItem = rightItems?.filter(el=>{
         // @ts-ignore
        return el.key != "管理"
      })
      // @ts-ignore
      SetRightItem((newItem))
    }
    // 得到分类
  },[])
  
  const { currTag ,setTag} = useHeadStore()
  

  const onClick: MenuProps["onClick"] = (e:any) => {
    console.log("click ", e);
    setTag(e.key)
    console.log('currTag',currTag)
  };

  return (
    <div className="flex_space_between head">
      <Menu
        defaultSelectedKeys={[currTag]}
        onClick={onClick}
        mode="horizontal"
        items={leftItems(Sort)}
        style={{ width: "400px", height: "60px" }}
      />
      <Menu
        defaultSelectedKeys={[currTag]}
        onClick={onClick}
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
