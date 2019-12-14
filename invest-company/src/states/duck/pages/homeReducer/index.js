import * as types from "./constants";

const initialState = {
    valueModal : ""
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
    case types.CHANGE_VALUE_MODAL:
        return {...state, valueModal : action.value }
    default:
        return state
    }
}
export default reducer;