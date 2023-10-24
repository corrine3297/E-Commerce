import React, { useEffect } from 'react'
import { deleteWishlistProduct } from '../services/allAPI';
import Card from 'react-bootstrap/Card';
import { Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';
import { storeDeleteFromWishlist } from '../redux/slices/wishlistSlice';

function Wishlist() {
  const wishlistArray = useSelector((state) => state.wishlistReducer);
  console.log(wishlistArray);

  const dispatch = useDispatch();
  const deleteSingleProduct = async (id) => {
    console.log(id);
    dispatch(storeDeleteFromWishlist(id))

  }

  useEffect(() => {
    
  }, [wishlistArray])

  return (
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
                    
                    <Button className='btn btn-light' ><i className="fa-solid fa-cart-shopping text-warning fa-2x"></i></Button>
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
  )
}

export default Wishlist