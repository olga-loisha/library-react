import {useQuery} from '@tanstack/react-query';
import axios from 'axios';

import {IBook} from '../models';

const APP_URL = 'http://localhost:5000'

export function useBooks(pageNumber: string | undefined, pageCount: number) {
    return useQuery({
        queryKey: ['books', pageNumber],
        queryFn: async (): Promise<IBook[]> => {
            const res = await axios.get(`${APP_URL}/books/${pageNumber}`);
            return res.data;
        },
        enabled: () => Number(pageNumber) > 0 && Number(pageNumber) <= pageCount
    })
}
