import { createStore, applyMiddleware, compose } from 'redux'
import * as callAPI from './callAPI';
import thunk from 'redux-thunk';

const initialState = {
    city: null,
    // searchValue: null
}

const reducer = (state = initialState, action) => {
    switch (action.type) {

        case "SET_DATA_CITY": {
            // console.log("city data", city);
            return { ...state, city: callAPI.getCity(action.value) }
        }

        default:
            return state
    }
}


const store = createStore(
    reducer, 
    +  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(thunk)
);

export default store;