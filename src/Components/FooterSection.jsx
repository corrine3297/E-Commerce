import React from 'react';
import { Row, Col } from 'react-bootstrap';
import './FooterSectio.css';
import { Link } from 'react-router-dom'
function FooterSection() {
    return (
        <>
            <div className='footerContainer'>
                <Row>
                    <Col sm={12} md={6} lg={4} xl={3} className='d-flex flex-column section-left p-3'>
                        <div>
                            <i className="fa-solid fa-phone me-3"></i>
                            +00 123 456 789
                        </div>
                        <div>
                            <i className="fa-regular fa-envelope me-3"></i>
                            support@atonal.com
                        </div>
                        <div>
                            <i className="fa-solid fa-location-dot me-3"></i>
                            4967 Sardis Sta, Victoria 8007, Montreal.
                        </div>
                        <div style={{ padding: '0px' }}>
                            <ul className="d-flex" style={{ justifyContent: 'space-between', alignItems: 'center', padding: '10px' }}>
                                <li><a href=""><i className="fa-brands fa-facebook fa-1x" style={{ color: '#080808' }}></i></a></li>
                                <li><a href=""><i className="fa-brands fa-instagram fa-1x" style={{ color: '#080808' }}></i></a></li>
                                <li><a href=""><i className="fa-brands fa-whatsapp fa-1x" style={{ color: '#080808' }}></i></a></li>
                                <li><a href=""><i className="fa-brands fa-twitter fa-1x" style={{ color: '#080808' }}></i></a></li>

                            </ul>
                        </div>
                    </Col>

                    <Col sm={12} md={6} lg={4} xl={3} className='d-flex flex-column p-3'>
                        <div style={{ fontWeight: 'bold', marginBottom: '5px' }}>
                            Links
                        </div>
                        <ul className="section-list" style={{ paddingLeft: '0px' }}>
                            <li> Products</li>
                            <li> <Link to={'/'} style={{ textDecoration: 'none', color: 'black' }}>Home</Link></li>
                            <li> Single Product</li>
                            <li> <Link to={'/cart'} style={{ textDecoration: 'none', color: 'black' }}>Cart</Link></li>
                            <li> <Link to={'/wishlist'} style={{ textDecoration: 'none', color: 'black' }}>Wishlist</Link></li>
                            <li> Contact Us</li>
                        </ul>
                    </Col>
                    <Col sm={12} md={6} lg={4} xl={3} className='d-flex flex-column p-3'>
                        <div style={{ fontWeight: 'bold', marginBottom: '5px' }}>
                            Links
                        </div>
                        <ul className="section-list" style={{ paddingLeft: '0px' }}>
                            <li> Products</li>
                            <li> <Link to={'/'} style={{ textDecoration: 'none', color: 'black' }}>Home</Link></li>
                            <li> Single Product</li>
                            <li> <Link to={'/cart'} style={{ textDecoration: 'none', color: 'black' }}>Cart</Link></li>
                            <li> <Link to={'/wishlist'} style={{ textDecoration: 'none', color: 'black' }}>Wishlist</Link></li>
                            <li> Contact Us</li>
                        </ul>
                    </Col>
                    <Col sm={12} md={6} lg={4} xl={3} className='d-flex flex-column p-3'>
                        <div style={{ fontWeight: 'bold', marginBottom: '5px' }}>
                            Links
                        </div>
                        <ul className="section-list" style={{ paddingLeft: '0px' }}>
                            <li> Products</li>
                            <li> <Link to={'/'} style={{ textDecoration: 'none', color: 'black' }}>Home</Link></li>
                            <li> Single Product</li>
                            <li> <Link to={'/cart'} style={{ textDecoration: 'none', color: 'black' }}>Cart</Link></li>
                            <li> <Link to={'/wishlist'} style={{ textDecoration: 'none', color: 'black' }}>Wishlist</Link></li>
                            <li> Contact Us</li>
                        </ul>
                    </Col>
                </Row>
            </div >
        </>
    )
}

export default FooterSection