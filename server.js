import express from 'express';
import dotenv from 'dotenv';
import userRoutes from './routes/userRoutes.js';
import bookRoutes from './routes/bookRoutes.js';
import requestTime from './middleware/queryMiddleware.js';

dotenv.config();
const port = process.env.PORT || 3000;


const app = express();

app.use(requestTime);
app.use(express.json());

app.get('/', (req,res) => {

    var responseText = 'Hello World!'
    
    res.send(responseText);
});

app.use('/api/users', userRoutes );
app.use('/api/books', bookRoutes );

app.listen(port, () => console.log(`Server running on port ${port}`) );
