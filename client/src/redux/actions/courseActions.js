import { setCourses, setLoading, setError, setPagination ,setCourse,resetError,} from '../slices/course';
import axios from 'axios';

export const getCourses = (page, favouriteToggle) => async (dispatch) => {
	dispatch(setLoading());
	try {
		const { data } = await axios.get(`/api/courses`);
		const { courses, pagination } = data;
		dispatch(setCourses(courses));
		dispatch(setPagination(pagination));
	} catch (error) {
		dispatch(
			setError(
				error.response && error.response.data.message
					? error.response.data.message
					: error.message
					? error.message
					: 'An expected error has occured. Please try again later.'
			)
		);
	}
};




export const getCourse = (id) => async (dispatch) => {
	dispatch(setLoading(true));
	try {
		const { data } = await axios.get(`/api/courses/${id}`);
		dispatch(setCourse(data));
	} catch (error) {
		dispatch(
			setError(
				error.response && error.response.data.message
					? error.response.data.message
					: error.message
					? error.message
					: 'An expected error has occured. Please try again later.'
			)
		);
	}
};



export const resetCourseError = () => async (dispatch) => {
	dispatch(resetError());
};