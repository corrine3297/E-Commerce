import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { addToCart, addToWishlist, getSingleProduct } from '../services/allAPI'
import { Button, Col, Row } from 'react-bootstrap'
import { useDispatch } from 'react-redux';
import { storeAddToCart } from '../redux/slices/cartSlice';
import { storeAddToWishlist } from '../redux/slices/wishlistSlice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ViewProduct() {

  const { id } = useParams()
  const dispatch = useDispatch();

  const [product, setProduct] = useState({})
  const getProductById = async () => {
    const { data } = await getSingleProduct(id)
    data.price = Math.floor(data.originalPrice * (data.discountPercentage / 100))
    setProduct(data)
  }

  useEffect(() => {
    getProductById()
  }, [])

  const addProductToCart = async (product) => {
    const cartResponse = await addToCart(product)
    if (cartResponse.status >= 200 && cartResponse.status < 300) {
      dispatch(storeAddToCart(product))
      toast.success(`Product moved to cart`)
    }
    else {
      toast.warning(`Product already in the cart`)
    }

  }

  const addProductToWishlist = async () => {
    const wishlistResponse = await addToWishlist(product)
    if (wishlistResponse.status >= 200 && wishlistResponse.status < 300) {
      dispatch(storeAddToWishlist(product))
      toast.success(`Product moved to wishlist`)
    } else {
      toast.warning(`Product already in the wishlist`)
    }

  }

  // console.log(id);
  return (
    <>
      <div className='container mt-5 mb-5'>
        <Row>
          <Col sm={12} md={6} lg={6} xl={6}
          >
            <div className='d-flex flex-column'>
              <img src={product?.thumbnail} alt="" />
              <div className='d-flex justify-content-evenly mt-3'>
                <Button onClick={() => addProductToCart(product)} className='btn btn-success'>Add to Cart</Button>
                <Button onClick={() => addProductToWishlist(product)} className='btn btn-primary'>Add to Wishlist</Button>
              </div>
            </div>
          </Col>
          <Col sm={12} md={6} lg={6} xl={6}
          >
            <div>
              <div className='m-3'>{product?.brand}</div>
              <div className='m-3'>{product?.title}</div>
              <div className='m-3'>$ {product?.price} <span style={{ textDecoration: 'line-through' }}> $ {product?.originalPrice}</span> {Math.floor(product?.discountPercentage)} % off</div>
              <div className='m-3'>Rating {product?.rating} <i class="fa-solid fa-star" style={{ color: '#42c91d' }}></i></div>
              <div className='d-flex flex-column mt-3'>
                <p className='m-3'>
                  ₹10 one-time sale fee may apply for top deals
                  Coupons for you

                </p>
                <p className='m-3'>
                  Special PriceGet extra 13% off on 50 item(s) (price inclusive of cashback/coupon)T&C
                  Available offers

                </p>
                <p className='m-3'>
                  Bank Offer10% Instant Discount on ICICI Bank Cardless EMI Txns, up to ₹1500, on orders of ₹5000 and aboveT&C

                </p>
                <p className='m-3'>
                  Bank Offer10% Instant Discount on ICICI Bank Credit Card Txns, up to ₹1250, on orders of ₹5000 and aboveT&C


                </p>
                <p className='m-3'>
                  Bank Offer10% Instant Discount on ICICI Bank Credit Card EMI Txns, up to ₹1500, on orders of ₹5000 and aboveT&C

                </p>
              </div>
            </div>
          </Col>
        </Row>
      </div>
      <ToastContainer position='top-center' theme='colored' autoClose={2000} />
    </>
  )
}

export default ViewProduct
// export {addProductToCart,addProductToWishlist}