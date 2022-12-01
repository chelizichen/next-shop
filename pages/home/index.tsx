import React from 'react'
import ToCHead from "../../compoents/ToC/Head";
import ToCLayout from "../../compoents/ToC/Layout";
import ToCBody from "../../compoents/ToC/Body";
import {getSortList} from "../api/ToC/get_sort_list";


export default function DashBoard({}:any) {
  return<>
    <ToCLayout>
    <ToCBody></ToCBody>
  </ToCLayout>;
  </>
  
}


// export async function getServerSideProps(){
  // const data = await getSortList();
  // return {
  //   props:{
  //     Sort:JSON.stringify(data)
  //   }
  // }
// }