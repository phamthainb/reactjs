import React, { useEffect, useState } from 'react';
import * as callAPI from './callAPI';
import { useSelector, useDispatch } from 'react-redux';

//https://www.weatherbit.io/account/dashboard 

function App() {

  return (
    <div className="container">
      <h2>weather app</h2>
      {/* // input search */}
      <Search />
      {/* // display city search */}
      <City />
    </div>
  );
}
export default App;

const Search = () => {
  const [valueSearch, setValueSearch] = useState("");
  const ListSuggestions = [];
  const dispatchValue = useDispatch();

  (function () {
    callAPI.countries.map(item => {
      if (item.indexOf(valueSearch) > 1) {
        ListSuggestions.push(item);
      }
    });
  })();

  return <div className="">
    <input type="text" name="search" value={valueSearch} onChange={(e) => {
      setValueSearch(e.target.value);
    }} />
    <input value="search" className="btn btn-primary" type="button"
      onClick={() => dispatchValue({ type: "SET_DATA_CITY", value: valueSearch })} />
    <ul>
      {ListSuggestions.length > 0 && ListSuggestions.map((item, index) => <li style={{ cursor: "pointer" }} key={index} onClick={() => setValueSearch(item)} >{item}</li>)}
    </ul>
  </div>
}

const City = () => {
  const city = useSelector(state => state.city);
  console.log(city);
  
  return <div>
    {city}
  </div>;
}