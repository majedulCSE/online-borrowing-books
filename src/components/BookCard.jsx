import { Button, Card, Chip } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { FaHeart } from "react-icons/fa";
import { FiPlusCircle } from "react-icons/fi";

const BookCard = ({book}) => {
    console.log(book)
    return (
        <Card className="border rounded-xl my-5">
     <div className="relative w-full aspect-square">
  <Image
    src={book.image_url}
    alt={book.title}
    fill
    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
    className="object-cover rounded-xl"
  />
    <Chip size="sm" className="absolute right-2 top-2 bg-red-600 text-white">{book.category}</Chip>

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

        <Link href={`/all-books/${book.id}`}><Button className={'w-full'}>View Details</Button></Link>

        </Card>

    );
};

export default BookCard;