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
    title: 'title',
    dataIndex: 'title',
    key: 'title',
  },
  {
    title: 'price',
    dataIndex: 'price',
    key: 'price',
  },
  {
    title: 'action',
    dataIndex: 'action',
    key: 'action',
  },
];



  return (


 <div>
  <Table dataSource={data} columns={columns} rowKey="id"/>;
 </div>


  )
}

export default Products