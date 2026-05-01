import { Button } from "@heroui/react";
import Link from "next/link";
import Image from "next/image";
import { FaArrowLeftLong } from "react-icons/fa6";

const BookDetailPage = async ({ params }) => {
  const { id } = await params;

  const res = await fetch('https://online-borrowing-books.vercel.app/data.json')
  const books = await res.json()

  const book = books.find(p => p.id == id)

  return (
    <div className="min-h-screen p-6">
      <h1 className="text-2xl font-bold mb-4">Book Details</h1>

      {book ? (
        <div className="bg-base-100 shadow-lg border p-4 rounded-lg">
           <Image
            src={book.image_url}
            alt={book.title}
            width={400}
            height={300}
            className="rounded-lg mb-4 w-full h-auto object-cover"
            />
          <h2 className="text-2xl font-semibold">{book.title}</h2>
            <p className="text-lg text-blue-600">
                <span className="text-black">Author:</span> {book.author}
            </p>
          <p>Description: {book.description}</p>
          
         
        </div>
      ) : (
        <p>Book not found</p>
      )}

        <div className="pt-4">
              <Link href="/all-books">
                <Button className="bg-base-100 shadow-lg btn btn-primary rounded-full">
                  <FaArrowLeftLong />
                  Back to All Books
                </Button>
              </Link>
            </div>

    </div>
  );
};

export default BookDetailPage;