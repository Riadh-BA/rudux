import React from 'react'
import Panier from './Panier'
import { useSelector } from 'react-redux'


const PanierList = () => {
    const Products=useSelector((state)=>state.ListReducer.ListProduct)
    
  var t=0
  Products.map(prod=>t=t+(prod.price*prod.compter))
  return (
    <div>
      <h1>Total price:<span>{t}</span></h1>
        {Products.filter((el)=>el.panier==true).map((prod)=><Panier prod={prod} key={prod.id}/>)}
    </div>
  )
}

export default PanierList