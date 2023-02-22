import React, { useMemo } from 'react'
import query, { useMutation, useQuery } from "react-query"
import { fetchProducts } from '../../../Api'
import { Table,Popconfirm } from 'antd';
import { Link } from 'react-router-dom';

function Products() {

 const{isLoading,isError,data,error}=useQuery("admin:products",fetchProducts)





 const columns = useMemo(()=>{
  return[
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
        <>
        <Link to={`/admin/products/${record._id}`}>Edit</Link>
  
        <Popconfirm
        title="Are you sure"
  
        onConfirm={()=>{
    
  
  
        }}
  
        onCancel={()=>console.log("iptal edildi")}
        okText="Yes"
        cancelText="No"
        placement='left'
     >
  
       <a href='#' style={{marginLeft:15}}>Delete</a>
  
     </Popconfirm>
        
  
      </>
      ),
    },
  ];
 },[])
 
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


  return (


 <div>
  <Table dataSource={data} columns={columns} rowKey="id"/>;
 </div>


  )
}

export default Products