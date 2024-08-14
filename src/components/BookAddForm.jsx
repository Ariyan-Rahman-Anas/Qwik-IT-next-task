"use client"

import { postData } from "@/utils/apiUtils";
import { toast } from 'sonner'
import { useRouter } from 'next/navigation'; 

export default function BookForm() {
    const router = useRouter();
    
    const handleAddBook = async (e) => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const author = form.author.value;
        const category = form.category.value;
        const language = form.language.value;
        const publisher = form.publisher.value;
        const publishedDate = form.publishedDate.value;
        const description = form.description.value;
        const availabilityStatus = form.availability.value;
        const price = form.price.value;
        const discountPrice = form.discountPrice.value;

        try {
            const aNewBook = { name, author, category, language, publisher, publishedDate, description, availabilityStatus, price, discountPrice }
            const data = await postData("books", aNewBook)
            if(data?.message){
                toast.success(data?.message)
                router.push("/all-books");
            }
        } catch (error) {
            toast.error(error?.message)
        }

    }

  return (
      <form onSubmit={handleAddBook}  className="space-y-4 z-[50] ">
          <div className="flex flex-col md:flex-row gap-4">
              <div className="relative name w-full">
                  <input
                      type="text"
                      name="name"
                      required
                      className="input-field peer"
                      placeholder=" "
                  />
                  <label
                      htmlFor="name"
                      className="input-label"
                  >
                      Name
                  </label>
              </div>
              <div className="relative author w-full">
                  <input
                      type="text"
                      name="author"
                      required
                      className="input-field peer"
                      placeholder=" "
                  />
                  <label
                      htmlFor="author"
                      className="input-label"
                  >
                      Author
                  </label>
              </div>
          </div>
          

          <div id="publisher-and-publishedDate" className="flex flex-col md:flex-row gap-4">
              <div className="relative publisher w-full">
                  <input
                      type="text"
                      name="publisher"
                      required
                      className="input-field peer"
                      placeholder=" "
                  />
                  <label
                      htmlFor="publisher"
                      className="input-label"
                  >
                      Publisher
                  </label>
              </div>
              <div className="relative publishedDate w-full">
                  <input
                      type="date"
                      name="publishedDate"
                      required
                      className="input-field peer"
                      placeholder=" "
                  />
                  <label
                      htmlFor="publishedDate"
                      className="input-label"
                  >
                      Published Date
                  </label>
              </div>
          </div>
          <div className="flex flex-col md:flex-row gap-4">
              <div className="relative category w-full">
                  <select name="category" required className='input-field' >
                      <option value="fiction">Fiction</option>
                      <option value="none-fiction">None-Fiction</option>
                  </select>
                  <label
                      htmlFor="category"
                      className="input-label"
                  >
                      Category
                  </label>
              </div>
              <div className="relative language w-full">
                  <select name="language" required className='input-field' >
                      <option value="arabic">Arabic</option>
                      <option value="bengali">Bengali</option>
                      <option value="english">English</option>
                  </select>
                  <label
                      htmlFor="language"
                      className="input-label"
                  >
                      Language
                  </label>
              </div>
              <div className="relative description w-full">
                  <select name="availability" required className='input-field' >
                      <option value="in-Stock">In Stock</option>
                      <option value="low-Stock">Low Stock</option>
                  </select>
                  <label
                      htmlFor="description"
                      className="input-label"
                  >
                      Availability
                  </label>
              </div>
          </div>
          <div className="flex flex-col md:flex-row gap-4">
              <div className="relative price w-full">
                  <input
                      type="number"
                      name="price"
                      required
                      className="input-field peer"
                      placeholder=" "
                  />
                  <label
                      htmlFor="price"
                      className="input-label"
                  >
                      Price
                  </label>
              </div>
              <div className="relative discountPrice w-full">
                  <input
                      type="number"
                      name="discountPrice"
                      required
                      className="input-field peer"
                      placeholder=" "
                  />
                  <label
                      htmlFor="discountPrice"
                      className="input-label"
                  >
                      Discount Percentage
                  </label>
              </div>
          </div>
          <div className="relative description w-full">
              <textarea name="description" className='input-field' rows="3" required  ></textarea>
              <label
                  htmlFor="description"
                  className="input-label"
              >
                  Description
              </label>
          </div>
          <input type="submit" value={"Add Book"} className="btn-2 cursor-pointer " />
      </form>
  )
}