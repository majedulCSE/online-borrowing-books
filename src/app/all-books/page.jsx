import BookCard from "@/components/BookCard";
import FilterBooks from "./FilterBooks";
import SearchTram from "./SearchTram";

const AllBooksPage = async ({ searchParams }) => {
  const { category, search } = searchParams;

  // ✅ Fetch data
  const res = await fetch(
    "https://online-borrowing-books.vercel.app/data.json",
    { cache: "no-store" }
  );
  const booksData = await res.json();

  // ✅ Extract categories dynamically
  const categories = [
    "all-books",
    ...new Set(booksData.map((book) => book.category)),
  ];

  // ✅ Apply filters
  let filteredBooks = [...booksData];

  if (category && category !== "all-books") {
    filteredBooks = filteredBooks.filter(
      (book) =>
        book.category.toLowerCase() === category.toLowerCase()
    );
  }

  if (search && search.trim() !== "") {
    filteredBooks = filteredBooks.filter((book) =>
      book.title.toLowerCase().includes(search.toLowerCase())
    );
  }

  return (
    <section className="container max-w-7xl mx-auto px-3 py-10">

      {/* 🔍 Filters */}
      <div className="flex flex-col sm:flex-row items-center py-8 gap-4">
        <FilterBooks
          categories={categories}
          currentCategory={category}
        />
        <SearchTram defaultValue={search || ""} />
      </div>

      {/* 📚 Books */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {filteredBooks.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>

    </section>
  );
};

export default AllBooksPage;