import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './components/App';
import './css/iconos.css';

import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import reducers from './reducers';
import reduxThunk from 'redux-thunk';

const store = createStore(
    reducers, //todos los reducers
    {}, //Estado inicial
    applyMiddleware(reduxThunk)
)

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
