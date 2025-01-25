import {ReactNode} from "react";

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
    onButtonClick: () => void;
}

export interface PaginationProps {
    pageCount: number;
}

export interface ModalContentProps {
    onClose: () => void;
}

export interface ButtonProps {
    children: ReactNode;
    onButtonClick: () => void;
}
