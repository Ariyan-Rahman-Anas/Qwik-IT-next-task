import BookForm from "@/components/BookAddForm";

export default function AddBookPage() {

return (
      <div className="w-full md:w-2/3 mx-auto pb-14 ">
    <div className="mt-8 mb-6 text-center ">
      <h1 className="text-3xl font-semibold  ">Add a New Book to the Collection</h1>
      <p className="text-sm mt-2 ">
        Share your favorite reads with others. Fill out the form below to add a new book to our library and help expand our collection.
      </p>
    </div>
          <div>
              <BookForm />
          </div>
    </div>
  )
}