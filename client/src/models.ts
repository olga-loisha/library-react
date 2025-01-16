export interface IBook {
    id: number;
    name: string;
    author: string;
    annotation: string;
    year: number;
    url?: string;
}

export interface BookCardProps {
    book: IBook;
}

export interface PaginationProps {
    pageCount: number;
}
