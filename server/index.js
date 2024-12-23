import express from 'express';
import cors from 'cors';

import bookRouts from './routes/books.js';

const app = express();
const PORT = 5000;

app.use(cors());

app.listen(PORT, () => {
    console.log(`Library-react app listening on port ${PORT}`)
});

app.get('/', (req, res) => {
    res.send('Library-react!')
});

app.use('/books', bookRouts);
