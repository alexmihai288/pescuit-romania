import Image from "next/image";
import React from "react";
// import { Badge } from "./ui/badge";
// import { Separator } from "./ui/separator";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Lake } from "@prisma/client";
import { MapPin, Phone } from "lucide-react";
import { FaRegStarHalfStroke, FaStar } from "react-icons/fa6";

export const LakeHero = ({ lake }: { lake: Lake }) => {
  return (
    <div className="relative">
      <Image
        src={lake.mainImageUrl}
        width={3843}
        height={2880}
        alt="main"
        className="object-cover max-h-[80vh] brightness-50"
      />
      <div className="self-center absolute top-10 bg-white right-5 h-10 rounded-md flex justify-end">
        <div className="flex items-center justify-center gap-2.5 py-2.5 px-5">
          <Link href="/login">
            <p className="text-sm font-bold">Intră în cont</p>
          </Link>
          {/* <Separator orientation="vertical" className="bg-indigo-500 w-1" /> */}
          <Link href="/register">
            <p className="text-sm font-bold">Creează cont</p>
          </Link>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 text-white w-full flex justify-between container">
        <div className="">
          <div className="absolute bottom-0 text-white p-2">
            <div className="flex gap-3">
              <Avatar className="h-20 w-20">
                <AvatarImage src={lake.logoUrl} />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div className="flex flex-col">
                <p className="font-bold text-4xl">{lake.lakeName}</p>
                <Link
                  href={`tel:${lake.phoneNumber}`}
                  className="flex items-center gap-2 text-lg"
                >
                  <Phone className="w-[18px] h-[18px]" />
                  {lake.phoneNumber}
                </Link>
                <div className="flex items-center gap-2 text-lg">
                  <MapPin className="w-[18px] h-[18px]" />
                  {lake.location}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="p-2">
          <p>Recenzii</p>
          <div className="flex items-center">
            <FaStar className="text-[#ffd700]" />
            <FaStar className="text-[#ffd700]" />
            <FaStar className="text-[#ffd700]" />
            <FaStar className="text-[#ffd700]" />
            <FaRegStarHalfStroke className="text-[#ffd700]" />    
          </div>
        </div>
      </div>
    </div>
  );
};
