import express from 'express';
import dotenv from 'dotenv';
import userRoutes from './routes/userRoutes.js';
import bookRoutes from './routes/bookRoutes.js';

dotenv.config();
const port = process.env.PORT || 3000;


const app = express();
app.get('/', (req,res) => {
    res.send('Hello World');
});

app.use('/api/users', userRoutes );
app.use('/api/books', bookRoutes );

app.listen(port, () => console.log(`Server running on port ${port}`) );
