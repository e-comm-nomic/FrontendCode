import Axios from 'axios';
import React from 'react';
import { useEffect, useState } from 'react';
import './Cart.css';
import StripeCheckout from 'react-stripe-checkout';
export const Cart = () => {
  const [product, setProduct] = useState({
    name: 'Assk Product',
  });
  const [cartList, setCartList] = useState([]);
  const [total, setTotal] = useState(0);
  useEffect(() => {
    Axios.get('http://localhost:3001/cart/').then((response) => {
      setCartList(response.data);
      setTotal(total + response.data[0].price);
    });
  }, []);

  const makePayment = (token) => {
    const body = {
      token,
      product,
    };
    const headers = {
      'content-type': 'application/json',
    };
    return fetch(`http://localhost:3001/payment/`, {
      method: 'POST',
      headers,
      body: JSON.stringify(body),
    })
      .then((response) => {
        console.log(response);
        const { status } = response;
        console.log('status', status);
        Axios.delete(`http://localhost:3001/cart/`).then((response) => {
          window.location.pathname = '/orders';
        });
      })
      .catch((error) => console.log(error));
  };

  const removeFromCart = (id) => {
    Axios.delete(`http://localhost:3001/cart/${id}`).then((response) => {
      window.location.pathname = '/cart';
    });
  };
  return (
    <div>
      <div className='row'>
        <div className='col-md-7'>
          {cartList.map((val, key) => {
            return (
              <div className='col-md-4'>
                <div
                  className='card text-center'
                  style={{ backgroundColor: 'black' }}
                >
                  <div className='overflow'>
                    <img src={val.imageurl} alt='card-image' />
                  </div>

                  <div
                    className='card-body text-white'
                    style={{ backgroundColor: '#394142' }}
                  >
                    <h4 className='card-title'>{val.product_name}</h4>
                    <p className='card-text text-secondary'>
                      {val.description}
                    </p>
                    <h4>Rs {val.price}</h4>

                    <button
                      className='btn btn-outline-danger'
                      onClick={() => {
                        removeFromCart(val.cart_id);
                      }}
                    >
                      Remove from cart
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className='col-md-4 detContainer'>
          <h3 className='text-success'>Cart Details</h3>
          <h4 className='text-white'>Quantity: {cartList.length}</h4>
          <h4 className='text-white'>Total: {total}</h4>
          <StripeCheckout
            stripeKey='pk_test_51HlWbbJEXG38mpDmDT5F4JdHjrh1Av4J2GTKpzKPG1tsrrlK3ISEzCC1GYzAmZ0Jb3g3kSQjnBqJxKhDuhFdXnkH00WgC6JaJz'
            token={makePayment}
          >
            <button className='btn btn-success'>Payment</button>
          </StripeCheckout>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};
