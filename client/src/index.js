// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './components/App';
// import {store} from "./reducers";
// import {Provider} from "react-redux";
//
// ReactDOM.render(
//     <Provider store={store}>
//         <App />
//     </Provider>,
//     document.getElementById('root')
// );


import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/App';
import { Provider } from 'react-redux';
import {store} from './reducers'; // Импортируем Redux store

const root = createRoot(document.getElementById('root'));

root.render(
    <Provider store={store}>
        <App />
    </Provider>
);
