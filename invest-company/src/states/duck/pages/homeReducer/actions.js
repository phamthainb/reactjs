
import * as types from "./constants"

export const homeModalSearch = (value) => {
    return {
        type: types.CHANGE_VALUE_MODAL,
        value
    }
    
}