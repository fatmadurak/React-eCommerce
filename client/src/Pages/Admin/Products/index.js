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

 const dataSource = [
  {
    key: '1',
    name: 'Mike',
    age: 32,
    address: '10 Downing Street',
  },
  {
    key: '2',
    name: 'John',
    age: 42,
    address: '10 Downing Street',
  },
];

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
    <div >

     <Table dataSource={dataSource} columns={columns} />;

    </div>
  )
}

export default Products