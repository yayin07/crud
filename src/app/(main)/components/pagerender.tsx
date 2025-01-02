"use client";

import React, { useState } from "react";
import { Book, ChevronDown, ChevronUp, Search } from "lucide-react";
import { Input } from "@/components/ui/input"; // Assuming you have these UI components
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

interface Author {
  name: string;
}

interface Book {
  key: string;
  title: string;
  authors?: Author[];
  cover_i?: number; // Open Library cover image ID
  coverUrl?: string;
  cover_edition_key: string;
}

interface BookGridProps {
  books: Book[];
}

const BookGrid: React.FC<BookGridProps> = ({ books: initialBooks }) => {
  const [books, setBooks] = useState(initialBooks);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const term = event.target.value.toLowerCase();
    setSearchTerm(term);
    const filteredBooks = initialBooks.filter(
      (book) =>
        book.title.toLowerCase().includes(term) ||
        book.authors?.some((author) => author.name.toLowerCase().includes(term))
    );
    setBooks(filteredBooks);
  };

  const handleSort = () => {
    const newOrder = sortOrder === "asc" ? "desc" : "asc";
    setSortOrder(newOrder);
    const sortedBooks = [...books].sort((a, b) => {
      return newOrder === "asc"
        ? a.title.localeCompare(b.title)
        : b.title.localeCompare(a.title);
    });
    setBooks(sortedBooks);
  };

  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^\w-]+/g, "");
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          My Book Collection
        </h1>

        <div className="mb-6 flex items-center space-x-4">
          <div className="relative flex-grow">
            <Input
              type="text"
              placeholder="Search books or authors..."
              value={searchTerm}
              onChange={handleSearch}
              className="w-full"
            />
            <Search
              className="absolute right-3 top-2.5 text-gray-400"
              size={20}
            />
          </div>

          <Button
            onClick={handleSort}
            variant="outline"
            className="flex items-center"
          >
            Sort
            <ChevronUp size={16} className="ml-1" />
            <ChevronDown size={16} className="ml-1" />
          </Button>
        </div>

        {books && books.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5  gap-6">
            {books.map((book) => (
              <Link
                href={`/books/${generateSlug(book.title)}`}
                key={book.key}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <div className="aspect-w-2 aspect-h-3 w-full">
                  <div className="w-full h-[20em] bg-gray-200 flex items-center justify-center relative overflow-hidden">
                    <Image
                      fill
                      src={book.coverUrl || "/default-cover.jpg"}
                      alt={`${book.title} cover`}
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>

                <div className="p-4">
                  <h3 className="text-lg font-medium text-gray-900 line-clamp-2">
                    {book.title}
                  </h3>
                  {book.authors && (
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">
                      By: {book.authors.map((author) => author.name).join(", ")}
                    </p>
                  )}
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500">No books found.</p>
        )}
      </div>
    </div>
  );
};

export default BookGrid;
