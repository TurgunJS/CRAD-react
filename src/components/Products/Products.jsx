import React from 'react'
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from '../../store/actions';
import { Button } from 'antd';
import './Products.css'

function Products({setEditProduct}) {
  const dispatch = useDispatch();
  const products = useSelector((store => store.products));
  const isFetching = useSelector((store => store.productsFetching));


  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch])

  const compare = (a, b) => {
    if (a.id > b.id) return 1
    else if(a.id < b.id) return -1
    else return 0
  }

  const sorted = products.sort(compare);

  return (
    <div className='containerApi'>
      <h1 style={{color: "red" }}>Products</h1>
     {isFetching && <div>Loading...</div>}
     {!isFetching && <div>
       {sorted.map(product => (
         <div key={product.id} style={{display: 'flex', justifyContent: 'space-around'}}>

                <span style={{color: "red" }}>ID</span>
                <div>{product.id}</div>
                <span style={{color: "blue"}}>NAME</span>
                <div>{product.name}</div>
                <span style={{color: "green"}}>PRICE</span>
                <div>{product.price}</div>
                <Button 
                  type="ghost" 
                  onClick={() => setEditProduct(product)}
                  >
                    Edit
                  </Button>
      
         </div>
       ))}
     </div>}
    </div>
  )
}

export default Products