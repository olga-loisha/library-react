export interface IBook {
    id: number;
    name: string;
    author: string;
    annotation: string;
    year: number;
}

export interface BookCardProps {
    book: IBook;
}