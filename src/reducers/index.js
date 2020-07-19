import { combineReducers } from 'redux';
import productosReducer from './productosReducer';
import utilsReducer from './utilsReducer.js';

 const reducer = combineReducers({
	productosReducer,
	utilsReducer
});

 export default reducer;