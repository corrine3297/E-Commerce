import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';
import Badge from 'react-bootstrap/Badge';
import { Link } from 'react-router-dom';
import logoImage from '../logo-dark.png';
import './HeaderSection.css';
import { getAllCartProducts, getAllWishlistProducts } from '../services/allAPI';

function HeaderSection() {
    const [cartProductlist,setCartProductlist]=useState([])
    const [wishlistProductlist,setWishlistProductlist]=useState([])
    const getCartCount= async()=>{
     const {data}=await getAllCartProducts()
     setCartProductlist(data)

    }

    const getWishlistCount= async()=>{
        const {data}=await getAllWishlistProducts()
        setWishlistProductlist(data)
    }

    useEffect(()=>{
        getWishlistCount()
        getCartCount()
    },[])

    return (
        <>
            <Navbar expand="lg" className="bg-white shadow p-3">
                <Container style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Navbar.Brand href="#home">
                        <Link to={'/'} style={{ textDecoration: 'none' }}>
                            <img width={'165px'} height={'38px'} src={logoImage} alt="" />
                        </Link>
                    </Navbar.Brand>

                    {/* d-none d-lg-flex the search input will be hidden on screens smaller than 800px and shown on screens larger than 800px. */}
                      
                    <Form className="d-flex d-none d-lg-flex">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                            style={{ width: '400px' }}
                        />
                        <Button className='btn btn-light'><i class="mt-1 fa-solid fa-magnifying-glass"></i></Button>
                    </Form>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse className='navbar-collapse' id="basic-navbar-nav" style={{ flexGrow: '0', justifyContent: 'space-between' }}>
                        <Nav className="ms-auto"> {/* Align items to the right */}
                            <Nav.Link className='btn border rounded d-none d-lg-block'>
                                <Link to={'/wishlist'} className='d-flex align-item-center' style={{ textDecoration: 'none', color: 'black', fontWeight: 'bold' }}>
                                    <i className='fa-solid fa-heart text-danger me-2 mt-1'></i>wishlist
                                    <Badge className='ms-2 rounded' bg='light'>{wishlistProductlist?.length}</Badge>
                                </Link>
                            </Nav.Link>
                            {/*  */}
                            <Nav.Link className='btn border rounded ms-3 d-none d-lg-block'>
                                <Link to={'/cart'} className='d-flex align-item-center' style={{ textDecoration: 'none', color: 'black', fontWeight: 'bold' }}>
                                    <i className='fa-solid fa-cart-shopping text-warning me-2 mt-1'></i>Cart
                                    <Badge className='ms-2 rounded' bg='light'>{cartProductlist?.length}</Badge>
                                </Link>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default HeaderSection