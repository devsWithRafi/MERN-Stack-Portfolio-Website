import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import eduData from './storage/education.js';
import { connectDB } from './config/db.js';
import router from './routes/projectsRoutes.js';

dotenv.config();

// port
const PORT = process.env.PORT || 3000;
// app
const app = express();
connectDB();

app.use(cors());
app.use(express.json());
app.use('/api/projects', router);

app.get('/', (req, res) => {
    return res.json({ mgs: 'welcome home' });
});

app.get('/api/certification', (req, res) => {
    return res.json(eduData);
});

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});
