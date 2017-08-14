import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import './index.css';
import CatApp from './Cat-App';

import registerServiceWorker from './registerServiceWorker';


const initialState = {
	loading: true,
	data: [],
	loaderClass: ''
};

function catlist(state=initialState, action) {
	if(action.type === 'ADD_URLS') {
		return {
			loading: action.loading,
			data: [
				...state.data,
				action.payload
			]
		}
	}
	return state;
}

const store = createStore(catlist, composeWithDevTools(applyMiddleware(thunk)));


ReactDOM.render(
	<Provider store={store}>
		<CatApp />
	</Provider>,
	document.getElementById('root'));
registerServiceWorker();
