import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Product from './Product'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { getuser } from '../JS/Actions/UserActionAPI'

const ProductList = () => {
    const Products=useSelector((state)=>state.ListReducer.ListProduct)
    const [total,setTotal]=useState(0)
    const disptach=useDispatch()
    
    var badge=0
     Products.map(prod=>prod.panier?badge++:prod)
    
    
  return (
    <div>

      <Link to={"/panier"} ><Button >Panier{badge}</Button></Link>
      <Link to={"/AddProduct"} ><Button>Add New Product</Button></Link>
      <Link to={"/Movielist"} ><Button>Movie List</Button></Link>
      <Link to={"/Tasklist"} ><Button>Task List</Button></Link>

      <Link to={"/userapi"} ><Button onClick={()=>disptach(getuser())} >user api</Button></Link>
      
        {Products.map(Prod=><Product Prod={Prod} key={Prod.id} setTotal={setTotal} total={total} />)}
        
    </div>
  )
}

export default ProductList