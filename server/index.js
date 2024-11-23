import dotenv from 'dotenv';
dotenv.config();
import connectToDatabase from './db.js';
import express from 'express';
import cors from 'cors';
import path from 'path';

// Routes
const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
import userRoutes from './routes/userRoutes.js';
import courseRoutes from './routes/courseRoutes.js';


connectToDatabase();
const app = express();
app.use(express.json());
app.use(cors());


app.use('/api/users', userRoutes);
app.use('/api/courses', courseRoutes);


app.get('/api/config/google', (req, res) => res.send(GOOGLE_CLIENT_ID));

const port = 5000;

const __dirname = path.resolve();
app.use('/uploads', express.static(path.join(__dirname, '/uploads')));


	app.use(express.static(path.join(__dirname, '/client/build')));

	app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html')));


app.get('/', (req, res) => {
	res.send('Api is running...');
});

app.listen(port, () => {
	console.log(`Server runs on port ${port}`);
});
