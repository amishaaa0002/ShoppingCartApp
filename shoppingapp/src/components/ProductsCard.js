import React from 'react';


import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function ProductsCard(props) {

    console.log(props.props.title);
  return (
    <Card style={{ width: '18rem'}}>
      <Card.Img variant="top" src={props.props.image} />
      <Card.Body>
        <Card.Title>{props.props.title}</Card.Title>
        <Card.Text>
          {props.props.price}
        </Card.Text>
        <Button variant="primary">Add to Card</Button>
      </Card.Body>
    </Card>
  );
}




export default ProductsCard