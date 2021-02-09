import uuid from 'uuidv4';

const initialState = {
    listTask: [{ id: uuid(), name: "learn", status: false }],
    searchValue: "",
    taskEdit : { id: uuid(), name: "learn", status: false }
}
function rootReducer(state = initialState, action) {
    
    switch (action.type) {
        case 'DELETE': {
            let newListTask = state.listTask.filter(item => item.id !== action.idDelete);
            return { ...state, listTask: newListTask }
        }
        case 'EDIT_TASK': {
            let task = state.listTask.filter(item => item.id === action.idEdit);
            return { ...state, taskEdit: task[0] }
        }
        case 'ON_SAVE': {
           let newList = state.listTask.map(item => {
               if(item.id === action.taskNew.id) return action.taskNew
               else return item
           })
           return { ...state, listTask : newList }
        }
        case 'ADD': {
            let newListTask = state.listTask;
            newListTask.push({
                id: uuid(),
                name: action.value,
                status: false
            })
            return { ...state, listTask: newListTask }
        }
        case 'SEARCH': {
            return {
                ...state,
                searchValue: action.valueSearch
            }
        }
        case 'UNSEARCH': {
            return {
                ...state,
                searchValue: ""
            }
        }
        default:
            return state;
    }
}
export default rootReducer;

