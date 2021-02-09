import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../state/actions';

const City = () => {
	const nameCity = useSelector(state => state.nameCity);
	const dataCity = useSelector(state => state.dataCity);
	const listOfCity = useSelector(state => state.listOfCity);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(actions.getDataCity(nameCity, 'weather'));
		dispatch(actions.getListOfCity(nameCity, 'forecast'));
		dispatch(actions.getDataImg(nameCity));
	}, [nameCity]);

	console.log('test listOfCity', listOfCity);
	return (
		<div className="row">
			<div className="col-lg-7">
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
			</div>
			<div className="col-lg-5">
				<div className="list-next-day">
					{listOfCity.map((item, index) => (
						<ItemListCity key={index} data={item} />
					))}
				</div>
			</div>
		</div>
	);
};
export default City;

const ItemListCity = ({ data }) => {
	console.log('test data', data);
	return (
		<div className="item-list-city">
			<div className="date-time">
				<p>{(data.dt_txt)}</p>
			</div>
			<div className="main">
				<p>Nhiệt độ : {(data.main.temp - 273.15).toFixed(2)}</p>
			</div>
			<div className="weather">
				<p>Thời tiết : {(data.weather[0].description)}</p>
			</div>
			<div class="icon"></div>
		</div>
	);
};
