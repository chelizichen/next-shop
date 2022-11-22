import ToBLeft from "../../compoents/ToB/Left";
import ToBLayout from "../../compoents/ToB/Layout";
import {LayoutRouterContext} from "next/dist/shared/lib/app-router-context";
import {useEffect} from "react";
import {useMenu} from "../../hooks/useStorageLogin";

export default function DashBoard() {
  return (
    <ToBLayout>
      {/*<LayoutRouterContext></LayoutRouterContext>*/}
      <div>ConTENT</div>
    </ToBLayout>
  )
}
