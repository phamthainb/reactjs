import React, { useEffect, useState, Fragment } from 'react';
import * as callAPI from './callAPI/callAPI';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from './state/actions';
import * as constants from './state/constants';
import City from './components/city';
import ListHistory from './components/listHistory';
import styled from 'styled-components';
//https://www.weatherbit.io/account/dashboard

const App = ({ className }) => {
  const nameCity = useSelector(state => state.nameCity);
  const bgrName = useSelector(state => state.bgrName);

  return (
    <div
      style={{
        backgroundImage:
          'url(https://pixabay.com/get/57e0d4474d53ac14f6da8c7dda79367a1c3cdce35a506c48702872d19445c75bbd_1280.jpg)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        minHeight: '100vh'
      }}>
      <div className="container">
        <div className={`${className} app`}>
          <Search />
          {nameCity ? <City /> : <div className="notify">Chưa có dữ liệu</div>}
          <hr />
          <ListHistory />
        </div>
      </div>
    </div>
  );
};

const Search = () => {
  const [valueSearch, setValueSearch] = useState('');
  const ListSuggestions = [];
  const dispatchValue = useDispatch();

  (function() {
    constants.countries.map(item => {
      if (item.indexOf(valueSearch) > 1) {
        ListSuggestions.push(item);
      }
    });
  })();

  return (
    <div className="search">
      <h2>weather app</h2>
      <input
        type="text"
        name="search"
        value={valueSearch}
        onChange={e => {
          setValueSearch(e.target.value);
        }}
      />{' '}
      <input
        value="search"
        className="btn btn-primary"
        type="button"
        onClick={() => {
          if (valueSearch) {
            dispatchValue(actions.setNameCity(valueSearch));
          }
        }}
      />{' '}
      <ul>
        {' '}
        {ListSuggestions.length > 0 &&
          ListSuggestions.map((item, index) => (
            <li
              style={{ cursor: 'pointer' }}
              key={index}
              onClick={() => setValueSearch(item)}>
              {item}
            </li>
          ))}{' '}
      </ul>{' '}
    </div>
  );
};

const StyleApp = styled(App)`
  background-color: rgba(0, 0, 0, 0.45);
  padding: 45px;
  color: wheat;
  .search {
    /*padding-top: 200px;*/
    h2 {
      text-align: center;
      text-transform: uppercase;
      font-size: 50px;
      font-weight: 700;
    }

    input {
      padding-left: 25px;
      width: 80%;
      height: 45px;
      font-size: 20px;
      border-radius: 5px;
      margin-bottom: 10px;
      border: none;
      background-color: azure;
      color: black;
      display: block;
      margin: 15px auto;
    }

    .btn {
      margin-top: 5px;
      text-transform: uppercase;
      font-weight: 600;
    }

    ul {
      background-color: white;
      color: black;
      font-size: 18px;
      margin-top: 5px;

      li {
        &:hover {
          background-color: rgba(0, 0, 0, 0.45);
        }
      }
    }
  }
  .notify {
    color: red;
    font-size: 20px;
  }
  .city {
    padding: 20px;
    background-color: rgba(0, 0, 0, 0.45);
    height: 100%;
    .location {
      font-size: 45px;
    }
    .date-time {
    }
    .temp {
      font-size: 45px;
    }
    .cloud-status {
    }
  }
  .list-next-day {
    margin-bottom: -10px;
    .item-list-city {
      background-color: rgba(0, 0, 0, 0.5);
      border-radius: 3px;
      margin-bottom: 10px;
      position: relative;
      padding: 10px;
      .icon {
            height: calc(100% - 20px);
    width: 40%;
    position: absolute;
    right: 10px;
    top: 10px;
    background-color: red;
      }
    }
  }
`;
export default StyleApp;
