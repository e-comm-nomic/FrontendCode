import React, { useEffect, useState, useContext } from 'react';
import { useHistory, Redirect } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Cart } from './components/Product/Cart';
import Axios from 'axios';
import styled from 'styled-components';
import './Products.css';
import './App.css';
import {
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol,
  MDBView,
  MDBIcon,
  MDBContainer,
} from 'mdbreact';

const searchBarStyle = {
  margin: '35px',
  position: 'center',
  size: '25px',
};

export const Products = () => {
  const [productList, setProductList] = useState([]);
  const [cartList, setCartList] = useState([]);
  // console.log('items in cart = ' + cartList.length);
  let history = useHistory();

  useEffect(() => {
    Axios.get('http://localhost:3001/products/').then((response) => {
      console.log(response.data);
      setProductList(response.data);
    });
  }, []);

  const deleteProduct = (id) => {
    Axios.delete(`http://localhost:3001/products/${id}`).then((response) => {
      window.location.pathname = '/products';
    });
  };

  const addToCart = (val) => {
    Axios.post(`http://localhost:3001/cart/`, {
      product_id: val.product_id,
      product_name: val.product_name,
      price: val.price,
      imageurl: val.imageurl,
    }).then((response) => {
      console.log('successfully added to the cart');
    });
  };

  return (
    <div>
      <div style={searchBarStyle}>
        <MDBCol md='6'>
          <form className='form-inline mt-4 mb-4'>
            <MDBIcon icon='search' />
            <input
              className='form-control form-control-sm ml-3 w-75'
              type='text'
              placeholder='Search for Dishes/Food Items'
              aria-label='Search'
            />
          </form>
        </MDBCol>
      </div>
      <div className='product-imagestyle'>
        <div className='container-fluid d-flex justify-content-center'>
          <div className='row'>
            {productList.map((val, key) => {
              return (
                <div className='col-md-3'>
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
                        className='btn btn-outline-success'
                        onClick={() => addToCart(val)}
                      >
                        Add to Cart
                      </button>
                      <button
                        className='btn btn-outline-danger'
                        onClick={() => {
                          deleteProduct(val.product_id);
                        }}
                      >
                        Delete Product
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
