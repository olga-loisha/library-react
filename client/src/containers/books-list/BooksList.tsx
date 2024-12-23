import React, {ReactNode} from 'react';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query'

import { IBook } from '../../models';
import BookCard from "../../components/book-card/BookCard";

// TODO: create const file and move it there? to make it simpler
const APP_URL = 'http://localhost:5000'

const BooksList = () => {
    const getBooks = async (): Promise<IBook[]> => {
        const res = await axios.get(`${APP_URL}/books`);
        return res.data;
    }

    const { isLoading, error, data } = useQuery({ queryKey: ['books'], queryFn: () => getBooks()});

    if (isLoading) return 'Loading';
    if (error) return `Something went wrong ${error}`;

    return (
        <section className="books-list">
            { data && data.map((book: IBook): ReactNode => <BookCard />
            )}
        </section>
    );
};

export default BooksList;