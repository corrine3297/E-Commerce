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
                        <div className='landingImage'>
                            <img className='landing-img' src={LandingImage} alt="" />
                        </div>
                    </Col>
                </Row>
                <Row className='mt-5'>
                    {filteredProducts?.length > 0 ? filteredProducts.map((product) => (
                        <Col sm={12} md={6} lg={4} xl={3} className='mb-4 product-col'>
                            <Card className='product-card shadow' style={{ width: '300px',paddingBottom:'20px',borderRadius:'20px' }}>
                                <Link to={`/products/${product?.id}`}> <Card.Img variant="top" style={{ overflowY: 'hidden',borderRadius:'20px'}}  height={'286.094px'} width={'300px'} src={product?.thumbnail} /></Link>
                                <Card.Body>
                                    <div>{product?.brand}</div>
                                    <Card.Title style={{ overflowY: 'hidden' }}>{product?.title.slice(0,20)}</Card.Title>
                                    <div className='font-style'><span style={{color:'#e52e06'}}> $ {product?.price} USD</span><span style={{ textDecoration: 'line-through' }}> $ {product?.originalPrice}</span> {Math.floor(product?.discountPercentage)}% off</div>
                                </Card.Body>
                            </Card>
                        </Col>               
                    ))
                        : allProducts?.length > 0 ? allProducts.map((product) => (
                            <Col sm={12} md={6} lg={4} xl={3} className='mb-4 product-col'>
                            
                            <Card className='product-card shadow' style={{ width: '300px',paddingBottom:'20px',borderRadius:'20px' }}>
                                <Link to={`/products/${product?.id}`}> <Card.Img variant="top" style={{ overflowY: 'hidden',borderRadius:'20px'}} height={'286.094px'} width={'300px'} src={product?.thumbnail} /></Link>
                                <Card.Body>
                                    <div>{product?.brand}</div>
                                    <Card.Title style={{ overflowY: 'hidden' }}>{product?.title.slice(0,20)}</Card.Title>
                                    <div className='font-style'> <span style={{color:'#e52e06'}}>$ {product?.price} USD</span> <span style={{ textDecoration: 'line-through' }}> $ {product?.originalPrice}</span> {Math.floor(product?.discountPercentage)}% off</div>
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