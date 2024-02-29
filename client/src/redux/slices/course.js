import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
	loading: false,
	error: null,
	courses: [],
	course: null,
	pagination: {},
	courseUpdate: false,	
};

export const coursesSlice = createSlice({
	name: 'courses',
	initialState,
	reducers: {
		setLoading: (state) => {
			state.loading = true;
		},
		setCourses: (state, { payload }) => {
			state.loading = false;
			state.error = null;
			state.courses = payload;
		},
		setCourse: (state, { payload }) => {
			state.course = payload;
			state.loading = false;
			state.error = null;
			
		},
		
		setError: (state, { payload }) => {
			state.loading = false;
			state.error = payload;
		},
		setPagination: (state, { payload }) => {
			state.loading = false;
			state.error = null;
			state.pagination = payload;
		},
		resetError: (state) => {
			state.error = null;
			
			state.courseUpdate = false;
			
		},
		setCourseUpdateFlag: (state) => {
			state.courseUpdate = true;
			state.loading = false;
		},
	},
});

export const { setLoading, setError, setCourses, setPagination,setCourse,setCourseUpdateFlag ,resetError } = coursesSlice.actions;

export default coursesSlice.reducer;

export const courseSelector = (state) => state.courses;
