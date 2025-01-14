import React from 'react';

import './BooksPage.css';
import BooksListContainer from '../../containers/BooksListContainer/BooksListContainer';

const BooksPage = () => {
    return (
        <section className="books">
            <BooksListContainer/>
        </section>
    );
};

export default BooksPage;
