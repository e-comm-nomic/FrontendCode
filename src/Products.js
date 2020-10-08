import React from "react";
import styled from 'styled-components';
import BootstrapTable from 'react-bootstrap-table-next';
import './App.css';
import { MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBRow, MDBCol, MDBView, MDBIcon, MDBContainer } from 'mdbreact';

const CardExample = () => {
  return (
    <MDBContainer md ='8'>
    <MDBRow>
      <MDBCol md='4'>
        <MDBCard>
          <MDBView cascade>
            <img
              hover
              height="300px"
              width="200px"
              overlay='white-slight'
              className='card-img-top'
              src='https://whatsinthepan.com/wp-content/uploads/2019/01/Easy-Thai-Noodles-8.jpg'
              alt='Card cap'/>
          </MDBView>
          <MDBCardBody cascade className='text-center'>
          <MDBCardTitle className='card-title'>
              <strong>Thai Noodles</strong>
            </MDBCardTitle>
            <button type="button" class="btn btn-primary">Place Order</button>
          </MDBCardBody>
            
        </MDBCard>
      </MDBCol>

      <MDBCol  md='4'>
        <MDBCard >
          <MDBView>
            <MDBCardImage
              hover
              overlay='white-slight'
              className='card-img-top'
              src='https://uniquetimes.org/wp-content/uploads/2019/08/Capture54.jpg'
            />
          </MDBView>
          <MDBCardBody cascade className='text-center'>
            <MDBCardTitle className='card-title'>
                <strong>Triple Schezwan fried rice</strong>
            </MDBCardTitle>
            <button type="button" class="btn btn-primary">Place Order</button>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>

      <MDBCol md='4'>
        <MDBCard>
          <MDBCardImage
            hover
            overlay='white-light'
            className='card-img-top'
            src='https://yummyindiankitchen.com/wp-content/uploads/2016/02/onion-dosa-recipe-320x320.jpg'
          />

          <MDBCardBody cascade className='text-center'>
            <MDBCardTitle className='card-title'>
              <strong>Onion Dosa</strong>
              
            </MDBCardTitle>
            <button type="button" class="btn btn-primary">Place Order</button>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBRow>
    </MDBContainer>
  )
}

const products = [
  { id: 1, name: "Thai Noodles Special", price: "Rs.299" , Description:"Delicious combination of Thai Noodles and soy sauce",Stock:"14 nos"},
  { id: 2, name: "Schezwan Fried Rice", price: "Rs.400" , Description:"Fanstastic delicacy of triple fried schezwan rice with a hot chilli sauce",Stock:"10 nos"},
  {id: 3, name: "Onion Dosa", price: "Rs.50" , Description:"Mouth Watering traditional onion dosa buttered to perfection",Stock:"20 nos"},

];
const columns = [
  { color: 'white'},
  {
  dataField: 'id',
  text: 'Product ID'
}, {
  dataField: 'name',
  text: 'Product Name'
}, {
  dataField: 'price',
  text: 'Product Price'
},
{
  dataField: 'Description',
  text:'Description'
}
,
{
  dataField: 'Stock',
  text:'Stock Available',
}
];

const searchBarStyle = {
    margin :"35px",
    position:"center",
    size:"25px"
}

export const Products = () => (
    <div>
    <div style={searchBarStyle}>
            <MDBCol md="6">
        <form className="form-inline mt-4 mb-4">
          <MDBIcon icon="search" />
          <input className="form-control form-control-sm ml-3 w-75" type="text" placeholder="Search for Dishes/Food Items" aria-label="Search" />
        </form>
      </MDBCol>
    </div>
    <div className="table-style">
    <BootstrapTable
    styles="overflow-x:auto;"
    striped
    loading={true}
    hover={true}
    bordered={true}
    wrapperClasses="table-responsive"
    keyField='id' 
    data={ products } 
    columns={ columns } >
    </BootstrapTable>
    </div>
    <div className="product-imagestyle">
    <CardExample />
    </div>
    </div>
    
)
