"use client"

import { getData } from "@/utils/apiUtils"
import { useEffect, useState } from "react"
import BookCard from "./BookCard"
import Link from "next/link"
import Loading from "@/app/Loading"

export default function BooksForHomePage() {

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
    },[])


  return (
      <div>
          <div className="mt-8 mb-6  text-center w-full md:w-2/3 mx-auto ">
              <h1 className="text-3xl font-semibold  ">Featured Reads of the Month</h1>
              <p className="text-sm mt-2 ">
                  Discover a curated selection of standout books handpicked for your reading pleasure. Dive into these top choices and find your next favorite!
              </p>
          </div>
          {loading ? <Loading /> : books?.data ? <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
                  {books?.data?.slice(0, 6).map(book => <BookCard key={book._id} book={book} />)}
              </div>
              <Link href={"/all-books"} className="btn-2  ">Sell all</Link>
          </> : <h1>{error}</h1> }
      </div>
  )
}