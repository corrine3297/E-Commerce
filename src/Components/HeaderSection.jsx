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
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getAllProducts } from '../services/allAPI';
import { filterProducts } from '../redux/slices/allProductsSlice';


function HeaderSection() {

    const dispatch = useDispatch()

    const cart = useSelector((state) => state.cartReducer)
    const wishlist = useSelector((state) => state.wishlistReducer)
    const [searchValue, setSearchValue] = useState('')

    const getSearchValue = (e) => {
        const { value } = e.target
        setSearchValue(value.trim())

    }

    const searchSubmit = () => {
        if (searchValue) {
            dispatch(filterProducts(searchValue))  
            setSearchValue("")  
        }
        else {
            toast.warning(`Please insert a value`)
        }
        // console.log(searchValue);
        
    }

    useEffect(() => {

    }, [cart, wishlist])

    return (
        <>
            <Navbar expand="lg" className="shadow p-3">
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
                            value={searchValue}
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                            onChange={getSearchValue}
                            style={{ width: '400px' }}
                        />
                        <Button onClick={searchSubmit} className='btn btn-light'><i class="mt-1 fa-solid fa-magnifying-glass"></i></Button>
                    </Form>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse className='navbar-collapse' id="basic-navbar-nav" style={{ flexGrow: '0', justifyContent: 'space-between' }}>
                        <Nav className="ms-auto"> {/* Align items to the right */}
                            <Nav.Link className='btn border rounded d-none d-lg-block'>
                                <Link to={'/wishlist'} className='d-flex align-item-center' style={{ textDecoration: 'none', color: 'black', fontWeight: 'bold' }}>
                                    <i className='fa-solid fa-heart text-danger me-2 mt-1'></i>wishlist
                                    <Badge className='ms-2 rounded' bg='light'>{wishlist.length}</Badge>
                                </Link>
                            </Nav.Link>
                            {/*  */}
                            <Nav.Link className='btn border rounded ms-3 d-none d-lg-block'>
                                <Link to={'/cart'} className='d-flex align-item-center' style={{ textDecoration: 'none', color: 'black', fontWeight: 'bold' }}>
                                    <i className='fa-solid fa-cart-shopping text-warning me-2 mt-1'></i>Cart
                                    <Badge className='ms-2 rounded' bg='light'>{cart.length}</Badge>
                                </Link>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <ToastContainer position='top-center' theme='colored' autoClose={2000} />

        </>
    )
}

export default HeaderSection