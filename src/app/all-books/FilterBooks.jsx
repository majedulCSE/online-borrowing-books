import getCategoriesData from "@/lib/getCategoriesData";
import { Button } from "@heroui/react";
import Link from "next/link";

const FilterBooks = async ({ currentCategory }) => {
  const categories = await getCategoriesData();

  return (
    <div className="space-y-2 flex flex-col sm:flex-row gap-4">
      
      <h2 className="text-2xl font-medium">Filter Category</h2>

      <div className="flex gap-2 flex-wrap">
        {categories.map((cat) => {
          const isActive =
            (currentCategory || "all-books") === cat;

          return (
            <Link
              key={cat}
              href={
                cat === "all-books"
                  ? `?`
                  : `?category=${cat}`
              }
            >
              <Button
                variant={isActive ? "solid" : "secondary"}
              >
                {cat}
              </Button>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default FilterBooks;