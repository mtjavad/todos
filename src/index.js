import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux'
import { createStore } from "redux";
import reducers from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';


const store = createStore(reducers , composeWithDevTools())

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
