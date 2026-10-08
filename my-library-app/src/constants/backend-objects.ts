import { ReactNode } from "react";

export type Book = {
  id: string;
  title: string;
  author: string;
  coverUrl?: string;
  shelves?: string[];
  status?: string;
};

export type ShelfProp = { 
  title: string;
  books?: Book[];
  children?: ReactNode
};