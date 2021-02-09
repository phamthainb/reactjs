import axios from 'axios';

const API_KEY = '80a942d9bcaae63e1b4f1bbb35adecc3';
const BASE_URL = 'https://api.openweathermap.org/data/2.5';
// const BASE_URL = "https://samples.openweathermap.org/data/2.5/forecast";

export const getDataWeather = (nameCity, type) =>
	axios({
		method: 'get',
		url: `${BASE_URL}/${type}?q=${nameCity}&appid=${API_KEY}`
	});

export const getDataImg = nameCity =>
	axios({
		method: 'get',
		url: `https://pixabay.com/api/?key=14932691-39c6acd28675ee12015b2ec04&q=${nameCity}&image_type=photo&pretty=true`
	});
