import express from 'express';
import cors from 'cors'
import dotenv from 'dotenv';
dotenv.config();
import { connectDB } from './config/db.js';

import authRoutes from './routes/authRoutes.js'
import postRoutes from './routes/postRoutes.js'
const app = express();
connectDB();

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/posts', postRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
