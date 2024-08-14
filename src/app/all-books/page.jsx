"use client"

import { useEffect, useState } from "react"
import Loading from "../Loading"
import BookCard from "@/components/BookCard"
import { getData } from "@/utils/apiUtils"

export default function AllBooksPage() {

  const [books, setBooks] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        setLoading(true)
        const data = await getData("books")
        setBooks(data)
        setLoading(false)
      } catch (error) {
        setError("Failed to fetch books");
        setLoading(false)
      }
    }
    fetchBooks()
  }, [])


  return (
    <>
      <div>
        <div className="mt-8 mb-6  text-center w-full md:w-2/3 mx-auto ">
          <h1 className="text-3xl font-semibold  ">See all of our books</h1>
        <p className="text-sm mt-2 ">
          Explore our diverse collection of books, featuring bestsellers, classics, and thought-provoking non-fiction. Whether you're into fiction or seeking knowledge, find your next great read here!
        </p>
        </div>

        {loading ? <Loading /> : books?.data ? <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-4 pb-20 ">
            {books?.data?.map(book => <BookCard key={book._id} book={book} />)}
          </div>
        </> : <h1>{error}</h1>}
      </div>
    </>
  )
}