"use client";

import { getData, deleteData } from "@/utils/apiUtils"; 
import { useEffect, useState } from "react";
import { SquareX } from "lucide-react";
import Loading from "@/app/Loading";
import { useRouter } from 'next/navigation'; 
import { toast } from 'sonner'

export default function BookDetailsPage({ params }) {

  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
    const router = useRouter();

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        setLoading(true);
        const data = await getData("books");
        setBooks(data);
        setLoading(false);
      } catch (error) {
        setError("Failed to fetch books");
        setLoading(false);
      }
    };
    fetchBooks();
  }, []);

  const currentBook = books?.data?.find((book) => book._id === params.id);
  const {
    name,
    author,
    category,
    language,
    publisher,
    publishedDate,
    description,
    availabilityStatus,
    price,
    discountPrice,
  } = currentBook || {};

  const handleDelete = async (bookId) => {
    try {
      const data = await deleteData("books", bookId);
      toast.success(data)
      router.push("/all-books");
    } catch (error) {
      console.error("Failed to delete the book:", error);
    }
  };

  return (
    <div className="pb-10 h-full min-h-[70vh] w-full md:w-2/3 mx-auto ">
      <div className="mt-8 mb-6 text-center ">
        <h1 className="text-3xl font-semibold  ">Your Next Great Read Awaits</h1>
        <p className="text-sm mt-2 ">
          Dive into the details of this must-read book. Uncover the story, learn about the author, and see why this book deserves a spot on your shelf.
        </p>
      </div>

      <div className=" h-full min-h-[90vh] md:min-h-[80vh] relative group border rounded-md">
        {loading ? (
          <Loading />
        ) : currentBook ? (
          <div className="p-5 flex items-center justify-center  mx-auto my-8 text-slate-400 text-sm tracking-wider">
            <div>
              <div className="absolute left-5 top-5">
                <h1 className="text-gray text-2xl font-semibold mb-3">{name}</h1>
                <p>
                  <span className="font-semibold">Author:</span> {author}
                </p>
                <p>
                  <span className="font-semibold">Publisher:</span> {publisher}
                </p>
                <p>
                  <span className="font-semibold">Published Date:</span>{" "}
                  {publishedDate}
                </p>
                <p className="mt-4">
                  <span className="font-semibold">Category:</span> {category}
                </p>
                <p>
                  <span className="font-semibold">Language:</span> {language}
                </p>
                <p className="mt-4">
                  <span className="font-semibold">Price:</span> {price}
                </p>
                <p>
                  <span className="font-semibold">Discount Price:</span>{" "}
                  {discountPrice}
                </p>
                <p className="mt-4 tracking-wider pb-20 ">
                  <span className="font-semibold">Description:</span>{" "}
                  {description}
                </p>
              </div>
              <p className="absolute bottom-0 left-0 right-0 w-fit mx-auto border border-b-none rounded-t-md px-2 py-1 ">
                <span className="font-semibold"></span> {availabilityStatus}
              </p>
              <button onClick={() => handleDelete(currentBook?._id)}>
                <SquareX xlinkTitle="Delete Book"
                  color="white"
                  size={20}
                  className="absolute right-3 top-3 cursor-pointer opacity-50 group-hover:opacity-85 duration-500"
                />
              </button>
            </div>
          </div>
        ) : (
          <h1>{error ? error : "Book not found"}</h1> 
        )}
      </div>
            </div> 
  );
}