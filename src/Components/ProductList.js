import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import Product from './Product'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const ProductList = () => {
    const Products=useSelector((state)=>state.ListReducer.ListProduct)
    const [total,setTotal]=useState(0)
    
    console.log(total)
  return (
    <div>
      <Link to={"/AddProduct"} ><Button>Add New Product</Button></Link>
      <Link to={"/Movielist"} ><Button>Movie List</Button></Link>
      <h1>Total price:<span>{total}</span></h1>
        {Products.map(Prod=><Product Prod={Prod} key={Prod.id} setTotal={setTotal} total={total} />)}
        
    </div>
  )
}

export default ProductList