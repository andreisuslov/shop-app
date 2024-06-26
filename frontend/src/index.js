import React from 'react';
import ReactDOM from 'react-dom/client';
import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
	RouterProvider,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import './assets/index.css';
import './assets/bootstrap.custom.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<App />}>
			{' '}
			{/*  
			App is at the root
			HomeScreen is the default route, so we can omit the index prop
			index={true} means that this is the default route
			path="/" means that this route is the root route
			element={<HomeScreen />} means that this route will render the HomeScreen component 

			:id is a dynamic parameter, meaning that it can be any string
			*/}
			<Route index={true} path="/" element={<HomeScreen />} />
			<Route path="/product/:id" element={<ProductScreen />} />
		</Route>,
	),
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	// StrictMode is a React feature that will detect any issues in your application and warn you about them
	<React.StrictMode>
		<Provider store={store}>
			<RouterProvider router={router} />
		</Provider>
	</React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
