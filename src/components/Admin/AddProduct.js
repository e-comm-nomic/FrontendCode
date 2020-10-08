import React, { useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import { Container } from 'react-bootstrap';

//Styles
const formstyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
};

export const AddProduct = () => {
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productDesc, setProductDesc] = useState('');
  const [productStock, setProductStock] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    if (
      productName == '' ||
      productPrice == '' ||
      productDesc == '' ||
      productStock == ''
    ) {
      toast.error('Enter all details');
    } else {
      toast.success('Product created');
    }
  };
  return (
    <div className='App'>
      <ToastContainer position='top-center' />
      <Container>
        <form style={formstyle} onSubmit={onSubmit}>
          <h1>Add Product</h1>
          <label className='text-white'>
            Product Name
            <input
              type='text'
              name='poduct_name'
              onChange={(e) => {
                setProductName(e.target.value);
              }}
            />
          </label>
          <br />
          <label className='text-white'>
            Price
            <input
              type='text'
              name='price'
              onChange={(e) => {
                setProductPrice(e.target.value);
              }}
            />
          </label>
          <br />
          <label className='text-white'>
            Description
            <textarea
              rows='10'
              cols='28'
              onChange={(e) => {
                setProductDesc(e.target.value);
              }}
            />
          </label>
          <br />
          <label className='text-white'>
            Stock
            <input
              type='text'
              onChange={(e) => {
                setProductStock(e.target.value);
              }}
            />
          </label>
          <br />
          <label className='text-white'>
            Photo
            <input type='file' />
          </label>
          <br />
          <input
            type='submit'
            value='Add Product'
            className='btn btn-success'
            style={{ marginBottom: '50px' }}
          />
        </form>
      </Container>
    </div>
  );
};
