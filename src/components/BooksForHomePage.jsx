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
      <>
          {loading ? <Loading /> : books?.data ? <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
                  {books?.data?.slice(0, 6).map(book => <BookCard key={book._id} book={book} />)}
              </div>
              <Link href={"/all-books"} className="btn-2  ">Sell all</Link>
          </> : <h1>{error}</h1> }
      </>
  )
}