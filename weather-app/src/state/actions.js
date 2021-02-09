import * as types from './constants';
import * as api from '../callAPI/callAPI';

export const setNameCity = name => ({ type: types.SET_NAME_CITY, value: name });

export const getDataCity = (name, type) => {
    return dispatch => {
        return api
            .getDataWeather(name, type)
            .then(res => {
                dispatch({ type: types.GET_DATA_CITY, value: res.data });
            })
            .catch(err => {
                alert('not data');
            });
    };
};
export const getListOfCity = (name, type) => {
    // get weather 5 day next of city
    return dispatch => {
        return api
            .getDataWeather(name, type)
            .then(res => {
                dispatch({ type: types.GET_LIST_OF_CITY, value: res.data });
            })
            .catch(err => {
                console.log('error', err);
            });
    };
};
export const getDataImg = name => {
    return dispatch => {
        return api
            .getDataImg(name)
            .then(res => {
                console.log('test getDataImg', res.data);
                // dispatch({ type: types.GET_DATA_IMG_BGR, value: res.data });
            })
            .catch(err => {
                console.log('error', err);
            });
    };
};
// bgr change follow name city 
// icon weather change follow weather
