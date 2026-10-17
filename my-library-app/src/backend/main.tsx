import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { db } from "./firebase";
import { Book } from "@/constants/backend-objects";

export async function fetchBooks(userId = "simone"): Promise<Book[]> {
  const snap = await getDocs(collection(db, "user", userId, "books"));
  return snap.docs.map((d) => ({ id: d.id, ...d.data() }) as Book);
}

export async function fetchBook(bookId: string, userId = "simone"): Promise<Book | null> {
  const snap = await getDoc(doc(db, "user", userId, "books", bookId));
  return snap.exists() ? ({ id: snap.id, ...snap.data() } as Book) : null;
}