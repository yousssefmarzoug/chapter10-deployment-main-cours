import { combineReducers, configureStore } from '@reduxjs/toolkit';



import user from './slices/user';

import admin from './slices/admin';

import course from './slices/course';

const reducer = combineReducers({
	
	course,
	
	user,
	
	admin,
});

export default configureStore({ reducer });
