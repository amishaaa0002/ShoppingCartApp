import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { productsArray } from '../ProductsStore';
import ProductsCard from '../components/ProductsCard';

function Store() {
  return (
    <div>

        <h2 align="center" className='p-3'>Welcome to the store..</h2>

        <Row xs={1} md={3} className='g-4'>
            
            {/* {productsArray.map((product,index) => (
                 <Col align="center" key={index}>
                 <h5>{product.title}</h5>
                 <p>{product.price}</p>
                 </Col>
                 // here instead of writing code here we can make a seperate component 
            ))} */}

            {productsArray.map((product,index) => (
                <ProductsCard props={product} />
                 // here instead of writing code here we can make a seperate component 
            ))}     
          
        </Row>
    </div>
  )
}

export default Store