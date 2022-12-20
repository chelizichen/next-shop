import ToBLayout from "../../../compoents/ToB/Layout";
import React, {useEffect, useRef, useState} from "react";
import {GetServerSidePropsContext} from "next/types";
import {Button, Checkbox, Form, Input} from "antd";

export default function AccountUpdatePage({query}:any){
	
	const [isUpdate,setUpdate] = useState(false)
	
	
	useEffect(()=>{
		console.log(query)
		if(query.id){
			setUpdate(true)
		}
	},[])
	
	
	const onFinish = (values: any) => {
		console.log('Success:', values);
	};
	
	const onFinishFailed = (errorInfo: any) => {
		console.log('Failed:', errorInfo);
	};
	
	return(
		<ToBLayout>
			<Form
				name="basic"
				initialValues={query}
				onFinish={onFinish}
				onFinishFailed={onFinishFailed}
				autoComplete="off"
			>
				<Form.Item
					label="goods_name"
					name="goods_name"
					rules={[{ required: true, message: 'Please input your username!' }]}
				>
					<Input />
				</Form.Item>
				
				<Form.Item
					label="sort_type_id"
					name="sort_type_id"
					rules={[{ required: true, message: 'Please input your password!' }]}
				>
					<Input />
				</Form.Item>
				<Form.Item
					label="goods_price"
					name="goods_price"
					rules={[{ required: true, message: 'Please input your password!' }]}
				>
					<Input  />
				</Form.Item>
				<Form.Item
					label="goods_rest_num"
					name="goods_rest_num"
					rules={[{ required: true, message: 'Please input your password!' }]}
				>
					<Input />
				</Form.Item>
				<Form.Item
					label="seller_id"
					name="seller_id"
					rules={[{ required: true, message: 'Please input your password!' }]}
				>
					<Input />
				</Form.Item>
				<Form.Item
					label="sort_child_id"
					name="sort_child_id"
					rules={[{ required: true, message: 'Please input your password!' }]}
				>
					<Input />
				</Form.Item>
				
				<Form.Item wrapperCol={{ offset: 8, span: 16 }}>
					<Button type="primary" htmlType="submit">
						{isUpdate?"修改":"添加"}
					</Button>
				</Form.Item>
			</Form>
		</ToBLayout>
	)
}

export async function getServerSideProps(props: GetServerSidePropsContext) {
	const {query} = props
	return {
		props: {
			query
		},
	};
}