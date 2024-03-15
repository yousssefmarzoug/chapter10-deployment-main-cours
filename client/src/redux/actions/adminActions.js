import axios from 'axios';

import { setCourses, setCourseUpdateFlag} from '../slices/course';
import {
	
	setError,
	setLoading,
	resetError,
	
	getUsers,
	userDelete,
	
} from '../slices/admin';

export const getAllUsers = () => async (dispatch, getState) => {
	setLoading();
	const {
		user: { userInfo },
	} = getState();

	const config = { headers: { Authorization: `Bearer ${userInfo.token}`, 'Content-Type': 'application/json' } };

	try {
		const { data } = await axios.get('api/users', config);
		dispatch(getUsers(data));
	} catch (error) {
		setError(
			error.response && error.response.data.message
				? error.response.data.message
				: error.message
				? error.message
				: 'An expected error has occured. Please try again later.'
		);
	}
};

export const deleteUser = (id) => async (dispatch, getState) => {
	setLoading();
	const {
		user: { userInfo },
	} = getState();

	const config = { headers: { Authorization: `Bearer ${userInfo.token}`, 'Content-Type': 'application/json' } };

	try {
		const { data } = await axios.delete(`api/users/${id}`, config);
		dispatch(userDelete(data));
	} catch (error) {
		setError(
			error.response && error.response.data.message
				? error.response.data.message
				: error.message
				? error.message
				: 'An expected error has occured. Please try again later.'
		);
	}
};






export const resetErrorAndRemoval = () => async (dispatch) => {
	dispatch(resetError());
};






//COURSE 


export const updateCourse =
	(semestre ,title,  id,course, exercice,courseIsNew, ) =>
	async (dispatch, getState) => {
		setLoading();
		const {
			user: { userInfo },
		} = getState();

		const config = { headers: { Authorization: `Bearer ${userInfo.token}`, 'Content-Type': 'application/json' } };

		try {
			const { data } = await axios.put(
				'api/courses',
				{ semestre , title, id, courseIsNew,course, exercice },
				config
			);
			dispatch(setCourses(data));
			dispatch(setCourseUpdateFlag());
		} catch (error) {
			setError(
				error.response && error.response.data.message
					? error.response.data.message
					: error.message
					? error.message
					: 'An expected error has occured. Please try again later.'
			);
		}
	};

	export const deleteCourse = (id) => async (dispatch, getState) => {
		setLoading();
		const {
			user: { userInfo },
		} = getState();
	
		const config = { headers: { Authorization: `Bearer ${userInfo.token}`, 'Content-Type': 'application/json' } };
	
		try {
			const { data } = await axios.delete(`api/courses/${id}`, config);
			dispatch(setCourses(data));
			dispatch(setCourseUpdateFlag());
			dispatch(resetError());
		} catch (error) {
			setError(
				error.response && error.response.data.message
					? error.response.data.message
					: error.message
					? error.message
					: 'An expected error has occured. Please try again later.'
			);
		}
	};

	export const uploadCourse = (newCourse) => async (dispatch, getState) => {
		setLoading();
		const {
			user: { userInfo },
		} = getState();
	
		const config = { headers: { Authorization: `Bearer ${userInfo.token}`, 'Content-Type': 'application/json' } };
	
		try {
			const { data } = await axios.post(`api/Courses`, newCourse, config);
			dispatch(setCourses(data));
			dispatch(setCourseUpdateFlag());
		} catch (error) {
			setError(
				error.response && error.response.data.message
					? error.response.data.message
					: error.message
					? error.message
					: 'An expected error has occured. Please try again later.'
			);
		}
	};


