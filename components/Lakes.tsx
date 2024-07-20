import Image from "next/image";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import { FaStar } from "react-icons/fa6";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { MapPin, Phone } from "lucide-react";
import { Button } from "./ui/button";
import { Lake } from "@prisma/client";
import Link from "next/link";

export const Lakes = ({
  initialLakes,
  numeCautat,
}: {
  initialLakes: Lake[];
  numeCautat: string;
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-5">
      {initialLakes.length > 0 ? (
        initialLakes.map((initialLake) => (
          <Link
            key={initialLake.id}
            href={`/lacuri/${initialLake.lakeName}`}
            className="relative group h-fit"
          >
            <Image
              src={initialLake.mainImageUrl}
              width={3843}
              height={2880}
              alt="main"
              className="object-cover max-h-[187.33px] rounded-sm brightness-75 hover:brightness-50 duration-200"
            />
            <div className="absolute top-0 inset-x-0 flex justify-center items-center mt-2">
              <FaStar className="text-[#ffd700]" />
              <FaStar className="text-[#ffd700]" />
              <FaStar className="text-[#ffd700]" />
              <FaStar className="text-[#ffd700]" />
              <FaRegStarHalfStroke className="text-[#ffd700]" />
            </div>

            <div className="self-center absolute text-white top-1/2 bottom-1/2 left-1/2 right-1/2 opacity-0 flex justify-center group-hover:opacity-100 duration-200 ">
              <Button variant="super" size="sm" className="uppercase text-xs">
                Vezi detalii
              </Button>{" "}
            </div>
            <div className="absolute bottom-0 text-white p-2">
              <div className="flex gap-2">
                <Avatar>
                  <AvatarImage src={initialLake.logoUrl} />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div className="text-sm flex flex-col">
                  <p className="font-semibold">{initialLake.lakeName}</p>
                  <div className="flex items-center gap-2">
                    <Phone className="w-[14px] h-[14px]" />
                    {initialLake.phoneNumber}
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-[14px] h-[14px]" />
                    {initialLake.location}
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))
      ) : (
        <p>Nu există lacul: {numeCautat}</p>
      )}{" "}
    </div>
  );
};
