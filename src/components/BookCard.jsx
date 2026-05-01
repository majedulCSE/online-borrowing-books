import { Card } from "@heroui/react";
import Image from "next/image";
import { FaHeart } from "react-icons/fa";
import { FiPlusCircle } from "react-icons/fi";

const BookCard = ({book}) => {
    console.log(book)
    return (
        <Card className="border rounded-xl">
     <div className="relative w-full aspect-square">
  <Image
    src={book.image_url}
    alt={book.title}
    fill
    className="object-cover rounded-xl"
  />
</div>

        <div>
            <h2 className="font-medium">{book.title}</h2>
        </div>

       <div className="flex justify-between">
            <div className="flex items-center gap-2">
                <p><FaHeart /></p>
                <p>{book.likes}</p>
            </div>

            <div className="flex items-center gap-2">
                <p><FiPlusCircle /></p>
                <p>{book.available_quantity}</p>
        </div>

       </div>

        </Card>

    );
};

export default BookCard;