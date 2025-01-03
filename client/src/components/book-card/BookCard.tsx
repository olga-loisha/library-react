import React from 'react';

import './BookCard.css';
import { BookCardProps } from '../../models';

const BookCard = (props: BookCardProps) => {
  const { book } = props;

  return (
      <div className="book-card">
          <img className="book-card-cover" />
          <div className="book-card-info">
              <p>
                  <span className="book-card-name">{book?.name}</span> by <span
                  className="book-card-author">{book?.author}</span>
              </p>
          </div>
      </div>)
};

export default BookCard;