import { combineReducers, configureStore } from '@reduxjs/toolkit';

import product from './slices/product';

import user from './slices/user';

import admin from './slices/admin';

const reducer = combineReducers({
	product,
	
	user,
	
	admin,
});

export default configureStore({ reducer });
