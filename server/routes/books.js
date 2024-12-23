import express from 'express';

import books from '../data/books.json' with { type: "json" };

const router = express.Router();

router.get('/', (req, res) => {
    res.json(books);
});

export default router;