import Image from "next/image";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import { FaStar } from "react-icons/fa6";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { MapPin, Phone } from "lucide-react";
import { Button } from "./ui/button";

export const Lakes = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
      <div className="relative group">
        <Image
          src="/main.jpg"
          width={3843}
          height={2880}
          alt="main"
          className="object-cover max-h-screen rounded-sm brightness-75 hover:brightness-50 duration-200"
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
              <AvatarImage src="/main.jpg" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="text-sm flex flex-col">
              <p className="font-semibold">Balta Șuștra</p>
              <div className="flex items-center gap-2">
                <Phone className="w-[14px] h-[14px]" />
                0771615096
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-[14px] h-[14px]" />
                Timișoara
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
    </div>
  );
};
