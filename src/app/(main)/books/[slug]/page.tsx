"use client";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

// Define interfaces for Author and Book data structure
interface Author {
  name: string;
}

interface Book {
  title: string | undefined;
  authors: Author[];
  coverUrl: string;
}

const BookPage: React.FC = () => {
  const [book, setBook] = useState<Book | null>(null);

  const { slug } = useParams();

  useEffect(() => {
    if (!slug) return;

    const fetchBook = async () => {
      try {
        const response = await fetch(
          `https://openlibrary.org/search.json?title=${slug}`
        );
        const data = await response.json();

        if (data.docs && data.docs.length > 0) {
          const bookData = data.docs[0];

          setBook({
            title: bookData.title,
            authors: bookData.author_name
              ? bookData.author_name.map((name: string) => ({ name }))
              : [],
            coverUrl: bookData.cover_i
              ? `https://covers.openlibrary.org/b/id/${bookData.cover_i}-L.jpg`
              : "/default-cover.jpg",
          });
        } else {
          setBook(null);
        }
      } catch (error) {
        console.error("Error fetching book data:", error);
      }
    };

    fetchBook();
  }, [slug]); // Re-fetch if slug changes

  if (!book) return <div>Loading...</div>;

  return (
    <div className="flex flex-col  md:flex-row gap-4 justify-center p-4">
      <div>
        <img src={book.coverUrl} alt={`${book.title} cover`} />
      </div>

      <h1>{book.title}</h1>
      <p>By: {book.authors.map((author) => author.name).join(", ")}</p>
    </div>
  );
};

export default BookPage;
