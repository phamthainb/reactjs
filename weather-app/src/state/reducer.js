import * as types from './constants.js';

const initialState = {
    nameCity: null,
    bgrName:"sun",
    dataCity: {},
    listHistory: [],
    listOfCity: []
};

const reducer = (state = initialState, action) => {
    console.log('test action', action);
    switch (action.type) {
        case types.SET_NAME_CITY:
            return { ...state, nameCity: action.value };

        case types.GET_LIST_OF_CITY:
            let listTemp = [];
            listTemp.push(
                action.value.list[0],
                action.value.list[8],
                action.value.list[16],
                action.value.list[24],
                action.value.list[32],
                action.value.list[39]
            );
            return { ...state, listOfCity: listTemp };

        case types.GET_DATA_CITY:
            {
                let hisTemp = [...state.listHistory];
                hisTemp.unshift(action.value);
                return { ...state, dataCity: action.value, listHistory: hisTemp, bgrName : action.value.weather[0].description};
            }

        default:
            return state;
    }
};

export default reducer;