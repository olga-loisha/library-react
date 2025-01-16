import React, {ReactNode, useEffect} from 'react';
import {useNavigate, useParams} from 'react-router';

import {IBook} from '../../models';
import BookCard from '../../components/bookCard/BookCard';
import Pagination from '../../components/pagination/Pagination';
import {useBooks} from '../../queries/books-queries';
import './BooksListContainer.css';

// TODO: create const file and move it there? to make it simpler
const PAGE_COUNT = 3;

const BooksListContainer = (): React.JSX.Element => {
    const {pageNumber} = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        if (Number(pageNumber) > PAGE_COUNT) {
            navigate('/books/1', {replace: true});
        }
    }, [pageNumber]);

    const {isLoading, error, data} = useBooks(pageNumber, PAGE_COUNT);

    if (isLoading) return <div>Loading</div>;
    if (error) return <div>Something went wrong</div>;

    return (<>
            <section className="books-list">
                {data && data.map((book: IBook): ReactNode => <BookCard key={book.id} book={book}/>
                )}
            </section>
            <Pagination pageCount={PAGE_COUNT}/>
        </>
    );
};

export default BooksListContainer;
