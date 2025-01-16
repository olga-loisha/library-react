import React, {useEffect} from 'react';
import {useNavigate} from 'react-router';

import {PaginationProps} from '../../models';
import usePagination from './usePagination';

const Pagination = (props: PaginationProps) => {
    const { pageCount} = props;
    const navigate = useNavigate();

    const { currentPageNumber, changePage, goToNextPage, goToPreviousPage } =
        usePagination(pageCount);

    useEffect(() => {
        navigate(`/books/${currentPageNumber}`)
    }, [currentPageNumber]);

    return (<div>
        <button onClick={goToPreviousPage}>Prev</button>
        <button onClick={() => changePage(1)}>1</button>
        <button onClick={() => changePage(2)}>2</button>
        <button onClick={() => changePage(3)}>3</button>
        <button onClick={goToNextPage}>Next</button>
    </div>);
}

export default Pagination;
