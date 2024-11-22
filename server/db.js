import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();


 const MONGO_URI = process.env.MONGO_URI;
 //const MONGO_URI = 'mongodb+srv://youssefmarzoug:19041@cluster0.7rbusfz.mongodb.net/?retryWrites=true&w=majority';
 console.log(process.env.MONGO_URI);
const connectToDatabase = async () => {
	try {
		mongoose.set('strictQuery', false);
		const connect = await mongoose.connect(MONGO_URI, {
			useUnifiedTopology: true,
			useNewUrlParser: true,
		});
		console.log(`MongoDb Connected: ${connect.connection.host}`);
	} catch (error) {
		console.log(`Error: ${error.message}`);
	}
};

export default connectToDatabase;
