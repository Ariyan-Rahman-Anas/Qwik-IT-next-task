import Link from "next/link"
import { deleteData } from "@/utils/apiUtils";
export default function BookCard({ book }) {



  const {
    _id,
    name,
    author,
    category,
    language,
    publisher,
    publishedDate,
    description,
    availabilityStatus,
    price,
    discountPrice } = book || {}

  const handleDelete = async (bookId) => {
    try {
      const response = await deleteData("books", bookId)
      console.log(response)
    } catch (error) {
      console.error("Failed to delete the book:", error);
    }

  }


  return (
    <Link href={`/book-details/${_id}`} className="relative group text-right text-sm text-slate-400 hover:bg-slate-800 duration-500 p-4 border rounded-md">

      <h1 className="text-2xl text-gray mb-2 ">{name}</h1>
      <p className="">Author {author}</p>
      <div className="flex items-center justify-end gap-2">
        <p>{category}</p>
        <p>{language}</p>
      </div>
      <div>
        <p className="line-through opacity-60 ">${price}</p>
        <p>${discountPrice}</p>
      </div>
    </Link>
  )
}