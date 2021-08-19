import { FaAdn } from 'react-icons/fa';

import CircularProgress from '@material-ui/core/CircularProgress';

import './api.css';

import React, { useState } from 'react';




function UserCard() {

  const [detail, setDetail] = useState([]);

  const [isLoading, setLoading] = useState(false);

  const getApi = () => {
    setLoading(true);
    fetch('https://reqres.in/api/users?page=1')
      .then((response) => response.json())
      .then((json) => {
        console.log(json.data);
        setDetail(json.data);
      });
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  return (
    <div className='UserCard'>
      <header>
        <a href='#' class='logo'>
          GetUserCard
        </a>
        <nav class='navbar'>
          {isLoading ? '' : <button onClick={getApi}>Get Details</button>}
        </nav>
      </header>

      <div className='container'>
        {isLoading ? (
          <div className='loading'>
            {' '}
            <h1>
              <CircularProgress color='yellow' size='100px' />
            </h1>
          </div>
        ) : (
          ''
        )}
        <div className='data'>
          {detail.map((item) => {
            return (
              <div className='profile'>
                <div className='image'>
                  <img src={item.avatar} alt='User-Image'></img>
                </div>
                <p>
                  {item.first_name} {item.last_name}
                </p>
                <p>{item.email} </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default UserCard;
