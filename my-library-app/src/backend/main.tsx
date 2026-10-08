import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase";
import { Book } from "@/constants/backend-objects";

export async function fetchBooks(userId = "simone"): Promise<Book[]> {
  const snap = await getDocs(collection(db, "user", userId, "books"));
  return snap.docs.map((d) => ({ id: d.id, ...d.data() }) as Book);
}