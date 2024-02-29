import mongoose from 'mongoose';

const courseSchema = new mongoose.Schema(
	{
		semestre: {
		type: String,
		required: true,
	          },
		
		title: {
			type: String,
			required: true,
		},
		course: {
			type: String,
			required: true,
			
		},
		exercice: {
			type: String,
			required: true,
			
			
		},
		courseIsNew : {
			type :Boolean,
			required :false ,
		},
		
		
		
		
		
	},
	{ timestamps: true }
);

const Course = mongoose.model('Course', courseSchema);

export default Course;
