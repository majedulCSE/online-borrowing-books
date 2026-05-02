import BookCard from "./BookCard";

const TopFeatured = async () => {
    const res = await fetch ('https://online-borrowing-books.vercel.app/data.json')
    const books = await res.json()
    const topFeatures = books.slice(0, 8)


    return (
        <div>
            <h1 className="text-2xl font-bold mt-5">Top Featured Books</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                {topFeatures.map(book => <BookCard key={book.id} book={book}/>)}
            </div>
        </div>
    );
};

export default TopFeatured;