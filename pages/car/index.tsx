import CarPage from "../../compoents/ToC/Car";
import ToCLayout from "../../compoents/ToC/Layout";
import {getSortList} from "../api/ToC/get_sort_list";
import React from "react";


export default function Car({}:any) {
  return (
    <div>
        <ToCLayout>
          <CarPage></CarPage>
        </ToCLayout>
    </div>
  )
}
//
// export async function getServerSideProps(){
//
// }