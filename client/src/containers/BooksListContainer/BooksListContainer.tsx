import React, {ReactNode, useEffect, useState} from 'react';
import {useNavigate, useParams} from 'react-router';

import {IBook} from '../../models';
import BookCard from '../../components/bookCard/BookCard';
import Pagination from '../../components/pagination/Pagination';
import {useBooks} from '../../queries/books-queries';
import './BooksListContainer.css';
import {createPortal} from "react-dom";
import ModalContent from "../../components/modalContent/ModalContent";

// TODO: create const file and move it there? to make it simpler
const PAGE_COUNT = 3;

const BooksListContainer = (): React.JSX.Element => {
    const {pageNumber} = useParams();
    const navigate = useNavigate();
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        if (Number(pageNumber) > PAGE_COUNT) {
            navigate('/books/1', {replace: true});
        }
    }, [pageNumber, navigate]);

    const {isLoading, error, data} = useBooks(pageNumber, PAGE_COUNT);

    if (isLoading) return <div>Loading</div>;
    if (error) return <div>Something went wrong</div>;

    return (<>
            <section className="books-list">
                {data && data.map((book: IBook): ReactNode => <BookCard onButtonClick={() => setShowModal(true)} key={book.id} book={book}/>
                )}
            </section>
            <Pagination pageCount={PAGE_COUNT}/>
            {showModal && createPortal(
                <ModalContent onClose={() => setShowModal(false)} />,
                document.body
            )}
        </>
    );
};

export default BooksListContainer;
