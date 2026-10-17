import { addDoc, collection, doc, getDoc, getDocs, orderBy, query, serverTimestamp } from "firebase/firestore";
import { db } from "./firebase";
import { Book, ShelfProp } from "@/constants/backend-objects";

export async function fetchBooks(userId = "simone"): Promise<Book[]> {
  const snap = await getDocs(collection(db, "user", userId, "books"));
  return snap.docs.map((d) => ({ id: d.id, ...d.data() }) as Book);
}

export async function fetchBook(bookId: string, userId = "simone"): Promise<Book | null> {
  const snap = await getDoc(doc(db, "user", userId, "books", bookId));
  return snap.exists() ? ({ id: snap.id, ...snap.data() } as Book) : null;
}

export async function fetchShelves(userId = "simone"): Promise<ShelfProp[]> {
  const q = query(collection(db, "user", userId, "shelves"), orderBy("createdAt"));
  const snap = await getDocs(q);
  return snap.docs.map((d) => ({ id: d.id, ...d.data() }) as ShelfProp);
}

export async function addShelf(name:string, userId = "simone") {
  return addDoc(collection(db, "user", userId, "shelves"), {
    name: name.trim(),
    createdAt: serverTimestamp(),
  });
}