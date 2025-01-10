import express from 'express';

import books from '../data/books.json' with { type: "json" };
import books2 from '../data/books2.json' with { type: "json" };
import books3 from '../data/books3.json' with { type: "json" };

const router = express.Router();

router.get('/:pageNumber', (req, res) => {
    const pageNumber = Number(req.params.pageNumber);

    if (pageNumber === 1) {
        return res.json(books);
    }

    if (pageNumber === 2) {
        return res.json(books2);
    }

    if (pageNumber === 3) {
        return res.json(books3);
    }
});

export default router;