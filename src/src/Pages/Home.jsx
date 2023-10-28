import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Row, Col } from 'react-bootstrap';
import React, { useEffect, useState } from 'react'
import './Home.css'
import { getAllProducts } from '../services/allAPI';
import { Link } from 'react-router-dom';
import LandingImage from './Landing_hero-image-1-1.png'
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllProducts } from '../redux/slices/allProductsSlice';


function Home() {
    const dispatch = useDispatch()
    const allProducts = useSelector((state) => state.allProductsReducer.allProducts)
    console.log(allProducts);
    const filteredProducts = useSelector((state)=>state.allProductsReducer.filteredProducts)
    console.log(filteredProducts);

    useEffect(() => {
        dispatch(fetchAllProducts())
    }, [])

    return (
        <>
            <div className='homeContainer'>
                <Row>
                    <Col sm={12} md={6} lg={6} xl={6}>
                        <div className='landingContent'>
                            <div className='landingTitle'>
                                Styles Accessories & New Gadgets
                            </div>
                            <div className='landingParagraph'>
                                Nam vel augue sit amet ligula tincidunt blandit sed sed neque. Morbi vulputate augue malesuada
                                mi viverra blandit.
                            </div>
                            <div className='landingButton'>
                                shop now
                            </div>

                        </div>
                    </Col>
                    <Col sm={12} md={6} lg={6} xl={6}>
                        <div>
                            <img width={'550px'} src={LandingImage} alt="" />
                        </div>
                    </Col>
                </Row>
                <Row className='mt-5'>
                    {filteredProducts?.length > 0 ? filteredProducts.map((product) => (
                        <Col sm={12} md={6} lg={4} xl={3} className='mb-4'>
                            <Card style={{ width: '15rem', height: '22rem' }}>
                                <Link to={`/products/${product?.id}`}> <Card.Img variant="top" height={'150px'} src={product?.thumbnail} /></Link>
                                <Card.Body>
                                    <div>{product?.brand}</div>
                                    <Card.Title style={{ overflowY: 'hidden' }}>{product?.title.slice(0,30)}</Card.Title>
                                    <div>$ {product?.price} <span style={{ textDecoration: 'line-through' }}> $ {product?.originalPrice}</span> {Math.floor(product?.discountPercentage)} % off</div>
                                </Card.Body>
                            </Card>
                        </Col>               
                    ))
                        : allProducts?.length > 0 ? allProducts.map((product) => (
                            <Col sm={12} md={6} lg={4} xl={3} className='mb-4'>
                            <Card style={{ width: '15rem', height: '22rem' }}>
                                <Link to={`/products/${product?.id}`}> <Card.Img variant="top" height={'150px'} src={product?.thumbnail} /></Link>
                                <Card.Body>
                                    <div>{product?.brand}</div>
                                    <Card.Title style={{ overflowY: 'hidden' }}>{product?.title.slice(0,30)}</Card.Title>
                                    <div>$ {product?.price} <span style={{ textDecoration: 'line-through' }}> $ {product?.originalPrice}</span> {Math.floor(product?.discountPercentage)} % off</div>
                                </Card.Body>
                            </Card>
                        </Col>
                        
                    )):<p> content nothing to display</p>
                    }
                    
                </Row>
            </div>

        </>
    )
}

export default Home