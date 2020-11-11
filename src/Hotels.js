import React, { useEffect, useState } from 'react';
import { useHistory, Redirect } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Cart } from './components/Product/Cart';
import Axios from 'axios';
import styled from 'styled-components';
import './Products.css';
import './App.css';

const searchBarStyle = {
  margin: '35px',
  position: 'center',
  size: '25px',
};

export const Hotels = () => {
  const [hotelList, setHotelList] = useState([]);
  const [admin, setAdmin] = useState(false);
  console.log(admin);
  useEffect(() => {
    Axios.get('http://localhost:3001/hotels/').then((response) => {
      console.log(response.data);
      setHotelList(response.data);
      localStorage.clear();
    });
  }, []);

  const deleteHotel = (id) => {
    Axios.delete(`http://localhost:3001/hotels/${id}`).then((response) => {
      window.location.pathname = '/hotels';
    });
  };

  const viewHotelProducts = (id) => {
    localStorage.removeItem('hotel_name');
    localStorage.setItem('hotel_name', id);
    window.location.pathname = '/viewProducts';
  };

  return (
    <div>
      <div>
        <div className='container-fluid d-flex justify-content-center'>
          <div className='row'>
            <div className='col-md-3'>
              <button onClick={() => setAdmin(!admin)}>
                {admin == true ? 'Admin' : 'user'}
              </button>
              <table className='table'>
                <thead className='thead-dark'>
                  <tr>
                    <th scope='col'>Hotel_Name</th>
                    <th scope='col'>Place</th>
                    <th scope='col'>Contact_No</th>
                    <th scope='col'>Pincode</th>
                    <th scope='col'>Rating</th>
                    <th scope='col'>View_Items</th>
                    {admin && <th scope='col'>Update_Hotel</th>}

                    {admin && <th scope='col'>Delete_Hotel</th>}
                  </tr>
                </thead>
                <tbody>
                  {hotelList.map((val, key) => {
                    return (
                      <tr key={key} style={{ height: '3px' }}>
                        <th scope='row'>{val.hotel_name}</th>
                        <td>{val.place}</td>
                        <td>{val.contact_no}</td>
                        <td>{val.pincode}</td>
                        <td>{val.hotel_rating} ⭐</td>
                        <td>
                          <button
                            className='btn btn-success'
                            style={{ height: '35px', width: '100px' }}
                            onClick={() => viewHotelProducts(val.hotel_name)}
                          >
                            view items
                          </button>
                        </td>

                        <td>
                          {admin && (
                            <button
                              className='btn btn-warning'
                              style={{ height: '35px', width: '100px' }}
                              onClick={() => {
                                localStorage.setItem('id', val.hotel_name);
                                window.location.pathname = '/updateHotel';
                              }}
                            >
                              Update
                            </button>
                          )}
                        </td>
                        <td>
                          {admin && (
                            <button
                              className='btn btn-danger'
                              style={{ height: '35px', width: '100px' }}
                              onClick={() => {
                                deleteHotel(val.hotel_name);
                              }}
                            >
                              Delete
                            </button>
                          )}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
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
