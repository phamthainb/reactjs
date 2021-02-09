import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../state/actions';

const ListHistory = () => {
  const history = useSelector(state => state.listHistory);
  let list = history.map((item, index) => (
    <div key={index} className="col-lg-4">
      <div className="history-item">
        <City data={item} />
      </div>
    </div>
  ));

  return (
    <div className="list-history">
      <h3>List History</h3>
      <div className="row">
        {list[0]}
        {list[1]}
        {list[2]}
      </div>
    </div>
  );
};

export default ListHistory;

const City = ({ data }) => (
  <div className="city">
    <div className="location">
      <p>{dataCity.name}</p>
    </div>
    <div className="date-time">
      <p> {Date(dataCity.dt)} </p>
    </div>
    <div className="temp">
      <p>
        Nhiệt độ : {' '}
        {dataCity.main
          ? (dataCity.main.temp - 273.15).toFixed(2)
          : ''}{' '}
        <span>℃</span>
      </p>
    </div>
    <div className="cloud-status">
      <p>
        Thời tiết :{' '}
        {dataCity.weather
          ? dataCity.weather[0].description.toUpperCase()
          : ''}
      </p>
    </div>
  </div>
);