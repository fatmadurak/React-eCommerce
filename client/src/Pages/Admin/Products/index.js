import React from 'react'
import query, { useQuery } from "react-query"
import { fetchProducts } from '../../../Api'
import { Table } from 'antd';

function Products() {

 const{isLoading,isError,data,error}=useQuery("admin:products",fetchProducts)

 if (isLoading) {
  
  return <div>
            Loading...
        </div>
 }

 
 if (isError) {
  
  return <div>
            {error.message}
        </div>
 }



const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
];


  return (


     <Table dataSource={data} columns={columns} />


  )
}

export default Products