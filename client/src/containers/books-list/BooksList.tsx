import React, {ReactNode, useEffect} from 'react';
import {useQuery} from '@tanstack/react-query';
import {useNavigate, useParams} from 'react-router';
import axios from 'axios';

import {IBook} from '../../models';
import BookCard from '../../components/bookCard/BookCard';
import Pagination from '../../components/pagination/Pagination';
import './BooksList.css';

// TODO: create const file and move it there? to make it simpler
const APP_URL = 'http://localhost:5000'
const PAGE_COUNT = 3;

const BooksList = (): React.JSX.Element => {
    const { pageNumber} = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        if (Number(pageNumber) > PAGE_COUNT) {
            navigate('books/1', { replace: true });
        }
    }, [pageNumber]);

    const getBooks = async (): Promise<IBook[]> => {
        const res = await axios.get(`${APP_URL}/books/${pageNumber}`);
        return res.data;
    }

    const checkPageNumber = (): boolean => {
        return pageNumber ? Number(pageNumber) > 0 && Number(pageNumber) <= PAGE_COUNT : false
    }

    const {isLoading, error, data} = useQuery({
        queryKey: ['books', pageNumber],
        queryFn: () => getBooks(),
        enabled: () => checkPageNumber()
    });

    if (isLoading) return <div>Loading</div>;
    if (error) return <div>Something went wrong</div>;

    return (<>
            <section className="books-list">
                {data && data.map((book: IBook): ReactNode => <div key={book.id}><BookCard book={book}/></div>
                )}
            </section>
            <Pagination pageCount={PAGE_COUNT}/>
        </>
    );
};

export default BooksList;