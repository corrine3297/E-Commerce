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
            <Navbar expand="lg" className="bg-body-light shadow">
                <Container  style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Navbar.Brand>
                        <Link to={'/'} style={{ textDecoration: 'none' }}>
                            <img width={'165px'} height={'38px'} src={logoImage} alt="" />
                        </Link>
                    </Navbar.Brand>

                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className='option-list'>

                        <Nav className="me-auto">


                            <Form className="d-flex search-field">
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

                            <Nav.Link className='btn border rounded link-style'>
                                <Link to={'/wishlist'} className='d-flex align-item-center' style={{ textDecoration: 'none', color: 'black', fontWeight: 'bold' }}>
                                    <i className='fa-solid fa-heart text-danger me-2 mt-1'></i>wishlist
                                    <Badge className='ms-2 rounded' bg='light'>{wishlist.length}</Badge>
                                </Link>
                            </Nav.Link>

                            <Nav.Link className='btn border rounded link-style'>
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