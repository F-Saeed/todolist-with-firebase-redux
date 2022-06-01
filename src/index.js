// React
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Redux
import { Provider as ReduxProvider } from 'react-redux';
import { store, rrfProps } from './redux/store';
import { ReactReduxFirebaseProvider } from 'react-redux-firebase';

// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ReactReduxFirebaseProvider>
    </ReduxProvider>
  </React.StrictMode>
);
