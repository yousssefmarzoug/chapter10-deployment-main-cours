import { combineReducers, configureStore } from '@reduxjs/toolkit';

import product from './slices/product';

import user from './slices/user';

import admin from './slices/admin';

import course from './slices/course';

const reducer = combineReducers({
	product,
	course,
	
	user,
	
	admin,
});

export default configureStore({ reducer });
