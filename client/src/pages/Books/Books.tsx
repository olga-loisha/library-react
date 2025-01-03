import React from 'react';

import './Books.css';
import BooksList from '../../containers/books-list/BooksList';

const Books = () => {
    return (
        <section className="books">
          <BooksList />
        </section>
    );
};

export default Books;