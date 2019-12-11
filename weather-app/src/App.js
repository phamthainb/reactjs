import React, {useEffect, useState} from 'react';
import axios from 'axios';


// const API_KEY = "80a942d9bcaae63e1b4f1bbb35adecc3";
const API_KEY = "bb21d94c723c4c5b7caabb1fb947c684";
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather?";

function App() {
  const listCity = ["hanoi", "thanh pho ho chi minh", " thanh hoa", "ninh binh"];
  const [dataCity, setDataCity] = useState([]);
  async function getCity(name) {
    try {
      const response = await axios.get(`${BASE_URL}q=${name}&appid=${API_KEY}`);
      console.log("log",response.data);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }

console.log(getCity(listCity[0]));
  
  return (
    <div className="App">
      <h2>weather app</h2>
      <div>

      </div>
    </div>
  );
}

export default App;

const City = (props) =>{

  return <div>
    city
  </div>
}