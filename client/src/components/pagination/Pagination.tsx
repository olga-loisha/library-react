import React, {useContext, useEffect} from 'react';
import {useNavigate} from 'react-router';

import {PaginationProps} from '../../models';
import {ThemeContext} from '../../contexts/themeContext';
import usePagination from './usePagination';
import './Pagination.css';

const Pagination = (props: PaginationProps) => {
    const { pageCount} = props;
    const navigate = useNavigate();
    const { currentTheme } = useContext(ThemeContext);

    const { currentPageNumber, changePage, goToNextPage, goToPreviousPage } =
        usePagination(pageCount);

    useEffect(() => {
        navigate(`/books/${currentPageNumber}`)
    }, [currentPageNumber, navigate]);

    return (<div className={`pagination pagination-${currentTheme}`}>
        <button onClick={goToPreviousPage}>Prev</button>
        <button onClick={() => changePage(1)}>1</button>
        <button onClick={() => changePage(2)}>2</button>
        <button onClick={() => changePage(3)}>3</button>
        <button onClick={goToNextPage}>Next</button>
    </div>);
}

export default Pagination;
