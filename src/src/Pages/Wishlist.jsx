import React, { useEffect, useState } from 'react'
import { addToCart, deleteWishlistProduct } from '../services/allAPI';
import Card from 'react-bootstrap/Card';
import { Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { storeDeleteFromWishlist } from '../redux/slices/wishlistSlice';
import { storeAddToCart } from '../redux/slices/cartSlice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Wishlist() {
  const wishlistArray = useSelector((state) => state.wishlistReducer);
  const cartArray = useSelector((state) => state.cartReducer);

  const dispatch = useDispatch();
  const deleteSingleProduct = async (id) => {

    const response = await deleteWishlistProduct(id)
    console.log(response)
    if (response.status >= 200 && response.status < 300) {

      toast.success(`Product deleted from wishlist`)
      dispatch(storeDeleteFromWishlist(id))
    }

  }

  const addToCartFromWishlist = async (wishlist) => {
    const cartAddResponse = await addToCart(wishlist);
    if (cartAddResponse?.status >= 200 && cartAddResponse?.status < 300) {
      dispatch(storeAddToCart(wishlist))
      deleteSingleProduct(wishlist.id)

      toast.success(`Product moved to cart`)
    }
    else {
      toast.warning(`Product already in cart`)
    }

  }

  useEffect(() => {

  }, [wishlistArray, cartArray])

  return (
    <>
      <div className='cartContainer'>

        {wishlistArray?.length > 0 ? (
          <Row className='mt-5' >
            {wishlistArray.map((wishlist) => (
              <Col className='d-flex' sm={12} md={6} lg={4} xl={3} >

                <Card className='m-2' style={{ width: '15rem', height: '22rem' }}>
                  <Link to={`/products/${wishlist?.id}`}> <Card.Img variant="top" height={'150px'} src={wishlist?.thumbnail} /></Link>
                  <Card.Body>
                    <div>{wishlist?.brand}</div>
                    <Card.Title style={{ overflowY: 'hidden' }}>{wishlist?.title}</Card.Title>
                    <div>$ {wishlist?.price} <span style={{ textDecoration: 'line-through' }}> $ {wishlist?.originalPrice}</span> {Math.floor(wishlist?.discountPercentage)} % off</div>
                    <div className='d-flex justify-content-between'>

                      <Button onClick={() => addToCartFromWishlist(wishlist)} className='btn btn-light' ><i className="fa-solid fa-cart-shopping text-warning fa-2x"></i></Button>
                      <Button onClick={() => deleteSingleProduct(wishlist?.id)} className='btn btn-light'><i class="fa-solid fa-trash fa-2x text-danger"></i></Button>

                    </div>
                  </Card.Body>
                </Card>

              </Col>
            ))}
          </Row>

        ) : (
          <div className='container d-flex justify-content-center align-items-center flex-column'>
            <img
              src="https://media.giphy.com/media/U8MXoKqFlTtfsOYrnl/giphy.gif"
              alt="empty wish list image"
              className='mb-2'
              height={"200px"}
              style={{ borderRadius: '50%' }}
            />
            <h3 className='text-danger' style={{ overflowY: 'hidden' }}>
              wishlist is empty!!!
            </h3>
            <Link to={"/"}>
              <Button className='btn btn-success mt-2'>Back to Home</Button>
            </Link>
          </div>
        )}
      </div>
      <ToastContainer position='top-center' theme='colored' autoClose={2000} />
    </>

  )
}

export default Wishlist