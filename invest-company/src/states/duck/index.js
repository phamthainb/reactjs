import { combineReducers } from "redux";
import {header, headerLeft, footer} from './layout';
import liquidationProcess from './pages/liquidationProcessReducer';
import home from './pages/homeReducer'; // home


const rootReducer = combineReducers({
    footer,
    header,
    headerLeft,
    home,
    liquidationProcess,
});
export default rootReducer;