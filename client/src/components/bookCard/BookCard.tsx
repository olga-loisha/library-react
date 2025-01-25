import React, { useContext } from 'react';

import './BookCard.css';
import { BookCardProps } from '../../models';
import { imagesResolver } from '../../utils/imagesResolver';
import Button from '../button/Button';
import { ThemeContext } from '../../contexts/themeContext';

const BookCard = (props: BookCardProps) => {
    const { book, onButtonClick } = props;
    const { currentTheme } = useContext(ThemeContext);

    return (
        <div className={`book-card book-card-${currentTheme}`}>
            <img className="book-card-cover" src={imagesResolver(book.id)} alt="Book cover" />
            <div className="book-card-info">
                <p>
                    <span className="book-card-name">{book?.name}</span> by <span
                    className="book-card-author">{book?.author}</span>
                </p>
                <Button onButtonClick={onButtonClick}>Take me home</Button>
            </div>
        </div>)
};

export default BookCard;
