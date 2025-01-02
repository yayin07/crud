import { Metadata } from "next";
import TokiMetaImage from "../../../public/vercel.svg";
import PageRendererData from "./components/pagerender";
import { Suspense } from "react";

const APP_BASE_URL = "https://example.com";

export const metadata: Metadata = {
  title: "Your Ultimate Collectibles Store | Tokiasia.com",
  description:
    "Discover a world of treasures at Tokiasia.com! Shop for exclusive collectible toys, LEGO sets, Funko Pops, sports cards, and sneakers. Find your passion now!",
  icons: [
    {
      type: "image/png",
      rel: "icon",
      url: "/favicon.png",
      sizes: "32x32",
    },
  ],
  openGraph: {
    images: APP_BASE_URL + TokiMetaImage.src,
  },
  metadataBase: new URL(APP_BASE_URL),
};

interface Author {
  name: string;
}

interface Book {
  key: string;
  title: string;
  authors?: Author[];
  cover_edition_key: string;
}

async function fetchBooks() {
  let books: Book[] = [];
  let error: string | null = null;

  try {
    const response = await fetch(
      "https://openlibrary.org/subjects/science.json?limit=20"
    );
    if (!response.ok) {
      throw new Error("Failed to fetch books.");
    }

    const data = await response.json();
    books = data.works.map((book: any) => ({
      key: book.key,
      title: book.title,
      authors: book.author_name || [],
      cover_edition_key: book.cover_edition_key,
      coverUrl: book.cover_edition_key
        ? `https://covers.openlibrary.org/b/olid/${book.cover_edition_key}-L.jpg`
        : "/default-cover.jpg",
    }));
  } catch (err) {
    error = (err as Error).message;
  }

  return { books, error };
}
export default async function Home() {
  const { books, error } = await fetchBooks();

  if (error) {
    return <div>Error: {error}</div>;
  }

  console.log(books, "books");

  return (
    <div>
      <PageRendererData books={books} />
    </div>
  );
}
