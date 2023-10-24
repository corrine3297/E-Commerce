import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import './Cart.css';
import { deleteCartProduct } from '../services/allAPI';
import Card from 'react-bootstrap/Card';
import { Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { storeDeleteToCart } from '../redux/slices/cartSlice';
import { useDispatch } from 'react-redux';


function Cart() {
  const cartArray = useSelector((state) => state.cartReducer);
  //  console.log(cartArray)
  const [total, setTotal] = useState(0);
  const dispatch = useDispatch();
  const deleteSingleProduct = async (id) => {
    const response = await deleteCartProduct(id)
    dispatch(storeDeleteToCart(id))
    getCartTotal()

  }

  const getCartTotal = () => {
    console.log(cartArray)
    if (cartArray?.length > 0) {
      setTotal(cartArray?.map(item => item?.price).reduce((p1, p2) => p1 + p2))
    }
    else {
      setTotal(0)
    }
  }

  useEffect(() => {
    getCartTotal()
  }, [cartArray])

  return (

    <div className='cartContainer'>

      {cartArray?.length > 0 ? (
        <Row className='mt-5' >
          <Col className='d-flex flex-wrap' sm={12} md={8} lg={9} xl={8} >
            {cartArray.map((cart) => (
              <Card className='m-2' style={{ width: '15rem', height: '22rem' }}>
                <Link to={`/products/${cart?.id}`}> <Card.Img variant="top" height={'150px'} src={cart?.thumbnail} /></Link>
                <Card.Body>
                  <div>{cart?.brand}</div>
                  <Card.Title style={{ overflowY: 'hidden' }}>{cart?.title}</Card.Title>
                  <div>$ {cart?.price} <span style={{ textDecoration: 'line-through' }}> $ {cart?.originalPrice}</span> {Math.floor(cart?.discountPercentage)} % off</div>
                  <Button onClick={() => deleteSingleProduct(cart?.id)} className='btn btn-light'><i class="fa-solid fa-trash fa-2x text-danger"></i></Button>
                </Card.Body>
              </Card>
            ))}
          </Col>


          <Col className='' sm={12} md={4} lg={3} xl={4}>
            <div className='border p-3 rounded shadow'>
              <h3 style={{ overflowY: 'hidden' }}>Cart summary</h3>
              <h6 style={{ overflowY: 'hidden' }}>Total product: <span>{cartArray.length}</span></h6>
              <h6 style={{ overflowY: 'hidden' }}>Total: $ <span>{total}</span></h6>

              <button className='btn btn-success rounded'>checkout</button>
            </div>
          </Col>
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
            Cart is empty!!!
          </h3>
          <Link to={"/"}>
            <Button className='btn btn-success mt-2'>Back to Home</Button>
          </Link>
        </div>
      )}
    </div>
  )
}

export default Cart