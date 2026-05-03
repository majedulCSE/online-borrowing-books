const getCategoriesData = async () => {
  const res = await fetch(
    "https://online-borrowing-books.vercel.app/data.json",
    { cache: "no-store" }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch categories");
  }

  const books = await res.json();

  // ✅ Extract unique categories
  const categories = [
    "all-books",
    ...new Set(books.map((book) => book.category)),
  ];

  return categories;
};

export default getCategoriesData;