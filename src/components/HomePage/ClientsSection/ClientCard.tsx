import { ClientCardProps } from "@/interfaces";
import Image from "next/image";

const ClientCard = ({ name, imageURL, comments, date }:ClientCardProps) => {

  return(
    <div className="flex flex-col border rounded-xl shadow p-5 gap-5 hover:scale-105 duration-300">
      <div className="flex items-center gap-5">
        <div className="flex">
          <Image
            src={imageURL}
            alt={name}
            width={100}
            height={100}
            className="w-20 h-20 object-cover rounded-full"
          />
        </div>
        <div className="flex flex-col gap-2">
          <span className="font-bold">{name}</span>
          <span className="text-sm italic">{date}</span>
        </div>
      </div>
      <div>
        {comments}
      </div>
    </div>
  )
}

export default ClientCard;
