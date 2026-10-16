import { ReactNode } from "react";
import { Timestamp } from "firebase/firestore";

export type Book = {
  id: string;
  title: string;
  author: string;
  coverUrl?: string;
  status?: "TBR" | "reading" | "finished";
  timesRead?: number;
  shelves?: string[];
  addedAt?: Timestamp;
  startedAt?: Timestamp;
  finishedAt?: Timestamp;
  rating?: number;
  review?: string;
};


export type ShelfProp = { 
  title: string;
  books?: Book[];
  children?: ReactNode
};