import React from 'react'
import query, { useMutation, useQuery } from "react-query"
import { fetchProducts } from '../../../Api'
import { Table } from 'antd';
import { Link } from 'react-router-dom';

function Products() {

 const{isLoading,isError,data,error}=useQuery("admin:products",fetchProducts)

 const deleteMutation=useMutation(deleteProduct,{


 


 })

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
    key: 'action',
    render:(record)=>(
  
      <Link to={`/admin/products/${record._id}`}>Edit</Link>

    ),
  },
];



  return (


 <div>
  <Table dataSource={data} columns={columns} rowKey="id"/>;
 </div>


  )
}

export default Products