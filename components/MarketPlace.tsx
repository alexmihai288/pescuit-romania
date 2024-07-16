import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { MapPin, Phone } from "lucide-react";
import { Badge } from "./ui/badge";

export const MarketPlace = () => {
  return (
    <div className="container">
      <h1 className="font-bold text-7xl text-white">Articole pescuit</h1>
      <div className="flex flex-col gap-10 my-20">
        <Link
          //   key={initialLake.id}
          href="/"
          className="flex"
        >
          <div className="relative group">
            <Image
              src="/main.jpg"
              width={3843}
              height={2880}
              alt="main"
              className="max-h-[500px] max-w-[500px] object-cover rounded-l-sm brightness-75 hover:brightness-50 duration-200"
            />

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
                  <div className="flex items-center gap-2">
                    <Phone className="w-[14px] h-[14px]" />
                    0771615096
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-[14px] h-[14px]" />
                    Timisoara
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white p-2.5 rounded-r-sm flex flex-col">
            <div className="flex items-center justify-between">
              <h1 className="font-semibold whitespace-nowrap">Jeep Wrangler</h1>
              <p className="font-bold">1000 lei</p>
            </div>
            <Badge className="bg-[#f2f4f5] text-black my-2.5 w-fit hover:bg-[#bfc1c2]">
              Timisoara
            </Badge>
            <p className="text-sm p-2.5">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Repellendus, molestiae. Animi ratione, alias in ipsum amet velit
              exercitationem corporis quod iste quasi incidunt excepturi ab quia
              id, quibusdam maxime odit?
            </p>

            <div className="flex items-center justify-between mt-auto self-end w-full">
              <p className="font-semibold align-baseline text-xs">
                Adăgat la 15 mai 2024
              </p>
              <Button className="">
                <Phone className="w-[14px] h-[14px] mr-2.5" />
                Sună
              </Button>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};
