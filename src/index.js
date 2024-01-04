import React from 'react';
import App from './components/app';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import ErrorBoundry from './components/error-boundry';
import RestoService from './services/resto-service';
import RestoServiceContext from './components/resto-service-context';
import store from './store';

import './index.scss';


const container = document.getElementById('root');
const root = createRoot(container);

const restoService = new RestoService()

root.render(
    <Provider store={store}>
        <ErrorBoundry>
            <RestoServiceContext.Provider value={restoService}>
                <Router>
                    <App/>
                </Router>
            </RestoServiceContext.Provider>
        </ErrorBoundry>
    </Provider>
);


// Deprecated method to render App

// import ReactDOM from 'react-dom';

// const restoService = new RestoService()

// ReactDOM.render(
//     <Provider store={store}>
//         <ErrorBoundry>
//             <RestoServiceContext.Provider value={restoService}>
//                 <Router>
//                     <App/>
//                 </Router>
//             </RestoServiceContext.Provider>
//         </ErrorBoundry>
//     </Provider>
//     , document.getElementById('root'));

