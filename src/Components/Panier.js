import React from 'react'
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { addpanier } from '../JS/Actions/Actions';
import { useDispatch } from 'react-redux';

const Panier = ({prod}) => {
    const dispatch=useDispatch();
  return (
    <div>
        <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={prod.posterUrl} />
      <Card.Body>
        <Card.Title>{prod.name}</Card.Title>
        <Card.Text>{prod.description}</Card.Text>
        <Card.Text>{prod.price}</Card.Text>
        
        <Button onClick={() => dispatch(addpanier(prod.id))}>{prod.panier?<span>retier</span> : <span>ajouter</span>}</Button>
      </Card.Body>
    </Card>
    </div>
  )
}

export default Panier