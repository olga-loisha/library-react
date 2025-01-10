import {useState} from 'react';
import {useParams} from "react-router";

function usePagination(pageCount: number) {
    const { pageNumber} = useParams();
    const [currentPageNumber, setCurrentPageNumber] = useState(Number(pageNumber));

    const changePage = (pageNumber: number) => {
        setCurrentPageNumber(pageNumber);
    }

    const goToPreviousPage = () => {
         setCurrentPageNumber(Math.max(currentPageNumber - 1, 1));
    }

    const goToNextPage = () => {
        setCurrentPageNumber(Math.min(currentPageNumber + 1, pageCount));
    }

    return { currentPageNumber, pageCount, changePage, goToNextPage, goToPreviousPage };
}

export default usePagination;