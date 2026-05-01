import BookCard from "@/components/BookCard";

const AllBooksPage = async () => {
    const res = await fetch ('https://online-borrowing-books.vercel.app/data.json')
    const books = await res.json()
    return (
        <div>
            <h1 className="text-2xl font-bold m-4">All Books</h1>

            <div className="grid grid-cols-4 gap-5">
                {books.map(book => <BookCard key={book.id} book={book}/>)}
            </div>

        </div>
    );
};

export default AllBooksPage;