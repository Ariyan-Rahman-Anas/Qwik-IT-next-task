// "use client"

// import { getData } from "@/utils/apiUtils"
// import { useEffect, useState } from "react"
// import { SquareX } from 'lucide-react';
// import Loading from "@/app/Loading";

// export default function BookDetailsPage({params}) {
//   console.log("params", params?.id)

//   const [books, setBooks] = useState([])
//   const [loading, setLoading] = useState(false)
//   const [error, setError] = useState(null)

//   useEffect(() => {
//     const fetchBooks = async () => {
//       try {
//         setLoading(true)
//         const data = await getData("books")
//         setBooks(data)
//         setLoading(false)
//       } catch (error) {
//         setError("Failed to fetch books");
//         setLoading(false)
//       }
//     }
//     fetchBooks()
//   }, [])

//   const currentBook = books?.data?.find(book => book._id === params.id)
//   const {name,
//             author,
//             category,
//             language,
//             publisher,
//             publishedDate,
//             description,
//             availabilityStatus,
//             price,
//     discountPrice, } = currentBook || {}

//   const handleDelete = async (bookId) => {
//     try {
//       const response = await deleteData("books", bookId)
//       console.log(response)
//     } catch (error) {
//       console.error("Failed to delete the book:", error);
//     }

//   }

//   return (
//     <>
//       {loading ? <Loading /> : currentBook ?  <div className="relative group border rounded-md p-5 w-full min-h-[60vh] flex items-center justify-center md:w-2/3 mx-auto my-8 text-slate-400 text-sm tracking-wider ">
//         <div>
//           <div className="absolute left-5 top-5">
//             <h1 className="text-gray text-2xl font-semibold mb-3 ">{name} </h1>
//             <p> <span className="font-semibold">Author:</span>  {author} </p>
//             <p> <span className="font-semibold">Publisher:</span>  {publisher} </p>
//             <p> <span className="font-semibold">Published Date:</span>  {publishedDate} </p>
//             <p className="mt-4"> <span className="font-semibold">Category:</span>  {category} </p>
//             <p> <span className="font-semibold">Language:</span>  {language} </p>
//             <p className="mt-4"> <span className="font-semibold">Price:</span>  {price} </p>
//             <p> <span className="font-semibold">discountPrice:</span>  {discountPrice} </p>
//           </div>
//           <p className="absolute bottom-0 "> <span className="font-semibold"></span>  {availabilityStatus} </p>
//           <button onclick={() => handleDelete(_id)}>
//             <SquareX  color="white" size={20} className="absolute right-3 top-3 cursor-pointer opacity-50 group-hover:opacity-85 duration-500  " />
//           </button>

//         </div>
//       </div> : <h1>{error}</h1> }
//     </>
//   )
// }





"use client";

import { getData, deleteData } from "@/utils/apiUtils"; // Import the deleteData function
import { useEffect, useState } from "react";
import { SquareX } from "lucide-react";
import Loading from "@/app/Loading";

export default function BookDetailsPage({ params }) {
  console.log("params", params?.id);

  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

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
      const response = await deleteData("books", bookId);
      console.log(response);
      // Optionally, you can remove the deleted book from the state or redirect the user
    } catch (error) {
      console.error("Failed to delete the book:", error);
    }
  };

  return (
    <>
      {loading ? (
        <Loading />
      ) : currentBook ? (
        <div className="relative group border rounded-md p-5 w-full min-h-[60vh] flex items-center justify-center md:w-2/3 mx-auto my-8 text-slate-400 text-sm tracking-wider">
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
            </div>
            <p className="absolute bottom-0">
              <span className="font-semibold"></span> {availabilityStatus}
            </p>
            <button onClick={() => handleDelete(currentBook?._id)}> {/* Fixed the onClick event */}
              <SquareX
                color="white"
                size={20}
                className="absolute right-3 top-3 cursor-pointer opacity-50 group-hover:opacity-85 duration-500"
              />
            </button>
          </div>
        </div>
      ) : (
        <h1>{error ? error : "Book not found"}</h1> // Show a different message if no book is found
      )}
    </>
  );
}