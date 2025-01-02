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
  // State to hold the fetched book data
  const [book, setBook] = useState<Book | null>(null);

  const { slug } = useParams();

  useEffect(() => {
    // Ensure there's a slug before fetching data
    if (!slug) return;

    const fetchBook = async () => {
      try {
        // Use the slug in the API request (modify this URL to your API)
        const response = await fetch(
          `https://openlibrary.org/search.json?title=${slug}`
        );
        const data = await response.json();

        // Assuming the first result is the correct book
        if (data.docs && data.docs.length > 0) {
          const bookData = data.docs[0];

          setBook({
            title: bookData.title,
            authors: bookData.author_name
              ? bookData.author_name.map((name: string) => ({ name }))
              : [],
            coverUrl: bookData.cover_i
              ? `https://covers.openlibrary.org/b/id/${bookData.cover_i}-L.jpg`
              : "/default-cover.jpg", // Default cover if no image
          });
        } else {
          // Handle case where no book was found
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
    <div>
      <h1>{book.title}</h1>
      <p>By: {book.authors.map((author) => author.name).join(", ")}</p>
      <img src={book.coverUrl} alt={`${book.title} cover`} />
    </div>
  );
};

export default BookPage;
