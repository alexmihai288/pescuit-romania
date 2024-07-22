import { Lake } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaRegStarHalfStroke, FaStar } from "react-icons/fa6";
import { Button, buttonVariants } from "./ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { MapPin, Phone } from "lucide-react";
import { cn } from "@/lib/utils";

export const TopLocations = ({ topLakes }: { topLakes: Lake[] }) => {
  return (
    <div className="container my-32">
      <h1 className="font-bold text-5xl text-center sm:text-6xl sm:text-left md:text-7xl whitespace-nowrap my-2.5">
        Top locații
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-20">
        {topLakes.map((topLake) => (
          <Link
            key={topLake.id}
            href={`/lacuri/${topLake.lakeName}`}
            className="relative group h-fit"
          >
            <Image
              src={topLake.mainImageUrl}
              width={3843}
              height={2880}
              alt="main"
              className="object-cover max-h-[187.33px] rounded-sm brightness-75 hover:brightness-50 duration-200"
            />
            <div className="absolute -top-10 inset-x-0 flex justify-center items-center mt-2">
              <Image src="/badge.svg" alt="badge" width={50} height={50} />
            </div>

            <div className="self-center absolute text-white top-1/2 bottom-1/2 left-1/2 right-1/2 opacity-0 flex justify-center group-hover:opacity-100 duration-200 ">
              <Button variant="super" size="sm" className="uppercase text-xs">
                Vezi detalii
              </Button>{" "}
            </div>
            <div className="absolute bottom-0 text-white p-2">
              <div className="flex gap-2">
                <Avatar>
                  <AvatarImage src={topLake.logoUrl} />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div className="text-sm flex flex-col">
                  <p className="font-semibold">{topLake.lakeName}</p>
                  <div className="flex items-center gap-2">
                    <Phone className="w-[14px] h-[14px]" />
                    {topLake.phoneNumber}
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-[14px] h-[14px]" />
                    {topLake.location}
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div className="flex justify-center mt-10">
        <Link
          href="/lacuri"
          className={cn(buttonVariants({ variant: "superOutline" }))}
        >
          Votează alte bălți
        </Link>
      </div>
    </div>
  );
};
