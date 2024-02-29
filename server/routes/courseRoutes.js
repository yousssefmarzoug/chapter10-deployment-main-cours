import express from 'express';
import Course from '../models/Course.js';
import { protectRoute, admin } from '../middleware/authMiddleware.js';
import asyncHandler from 'express-async-handler';

const courseRoutes = express.Router();

const getCourses = async (req, res) => {
	const courses = await Course.find({});

	res.json({
		courses,
		pagination: {},
	});
};

const getCourse = async (req, res) => {
	const course = await Course.findById(req.params.id);

	if (course) {
		res.json(course);
	} else {
		res.status(404).send('Product not found.');
		throw new Error('Product not found');
	}
};
const createNewCourse = asyncHandler(async (req, res) => {
	const { semestre,title,exercice, course ,courseIsNew,} = req.body;
	

	const newCourse = await Course.create({
		semestre, title, course ,exercice ,courseIsNew,
	});

	await newCourse.save();

	const courses = await Course.find({});

	if (newCourse) {
		res.json(courses);
	} else {
		res.status(404).send('Product could not be uploaded.');
		throw new Error('Product could not be uploaded.');
	}
});
const updateCourse = asyncHandler(async (req, res) => {
	const {semestre,title, id, course ,exercice ,courseIsNew, } =
		req.body;
	

	const coursee = await Course.findById(id);

	if (coursee) {
		coursee.semestre=semestre;
		coursee.title=title;
		coursee.course=course;
		coursee.exercice=exercice;
		coursee.courseIsNew=courseIsNew;

		await coursee.save();

		const courses = await Course.find({});

		res.json(courses);
	} else {
		res.status(404).send('Product not found.');
		throw new Error('Product not found.');
	}
});
const deleteCourse = asyncHandler(async (req, res) => {
	const course = await Course.findByIdAndDelete(req.params.id);

	if (course) {
		res.json(course);
	} else {
		res.status(404).send('Product not found.');
		throw new Error('Product not found.');
	}
});


courseRoutes.route('/').get(getCourses);
courseRoutes.route('/:id').get(getCourse);
courseRoutes.route('/:id').delete(protectRoute, admin, deleteCourse);
courseRoutes.route('/').put(protectRoute, admin, updateCourse);

courseRoutes.route('/').post(protectRoute, admin, createNewCourse);

export default courseRoutes;
