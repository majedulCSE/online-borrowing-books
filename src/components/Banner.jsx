import { Button } from "@heroui/react";
import Link from "next/link";

const Banner = () => {
  return (
    <div className="container mx-auto bg-[url('https://www.teachermagazine.com/assets/images/teacher/_1200x630_crop_center-center_82_none/Most_borrowed_books_1.jpg')] h-[70vh] w-full bg-cover bg-no-repeat bg-center flex items-center rounded-lg shadow-2xl my-5">
      {/* Overlay */}
      <div className="w-full h-full rounded-lg bg-black/50 flex items-center ">
        <div className="max-w-7xl mx-auto px-6 text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 max-w-2xl">
            Find Your Next Read
          </h1>
          <p className="text-lg md:text-xl mb-6 max-w-xl text-gray-200">
            Explore our curated digital library of over 50,000 premium titles. Experience high-end typography and seamless reading across all your devices.
          </p>

          <div className="flex gap-4">
            <Link href="#">
              <Button className="bg-linear-to-r from-pink-500 via-purple-500 bg-red-500">
                Browse Books
              </Button>
            </Link>

            <Link href="/pricing">
              <Button variant="outline" className="text-white">
                Profiling
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;