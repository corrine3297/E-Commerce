import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Row, Col } from 'react-bootstrap';
import React, { useEffect, useState } from 'react'
import './Home.css'
import { getAllProducts } from '../services/allAPI';
import { Link } from 'react-router-dom';


function Home() {
    const [allProducts, setAllProducts] = useState([])
    const getProductList = async () => {
        const { data } = await getAllProducts();
        data.filter(prod=>{
            prod.price=Math.floor(prod.originalPrice*(prod.discountPercentage/100))
        })
        setAllProducts(data)
        console.log(data)
    }


    useEffect(() => {
        getProductList()
        console.log(allProducts)
    }, [])


    return (
        <>

            <div className='homeContainer'>
                <Row
                >
                    {allProducts?.length > 0 ? allProducts.map((product) => (


                        <Col sm={12} md={6} lg={4} xl={3} className='mb-4'>
                            <Card style={{ width: '15rem', height:'20rem' }}>
                               <Link to={'/product'}> <Card.Img  variant="top" height={'150px'} src={product?.thumbnail} /></Link>
                                <Card.Body>
                                    <div>{product?.brand}</div>
                                    <Card.Title style={{ overflowY: 'hidden' }}>{product?.title}</Card.Title>
                                    <div>$ {product?.price} <span style={{textDecoration:'line-through'}}> $ {product?.originalPrice}</span> {Math.floor(product?.discountPercentage)} % off</div>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))
                        : <p> content nothing to display</p>
                    }
                </Row>
            </div>

        </>
    )
}

export default Home