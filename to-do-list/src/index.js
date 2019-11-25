import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import ToDoList from '../src/views/components/todolist';
import rootReducer from './states/reducers/rootReducer';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery';
import 'bootstrap';
import '../src/styles/main.less';


const store = createStore(rootReducer);
console.log(store);

ReactDOM.render(
    <Provider store={store}>
        <ToDoList />
    </Provider>, document.getElementById('root'));
