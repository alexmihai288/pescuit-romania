import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button, buttonVariants } from "./ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { MapPin, Phone } from "lucide-react";
import { Badge } from "./ui/badge";
import { Article } from "@prisma/client";

export const MarketPlace = ({ lastArticles }: { lastArticles: Article[] }) => {
  return (
    <div className="container">
      <h1 className="font-bold text-7xl text-white">Articole pescuit</h1>
      <p className="text-xs text-white">*Adăugate recent</p>
      <div className="flex flex-col gap-10 my-20">
        {lastArticles.map((article) => (
          <div key={article.id} className="flex">
            <div className="relative group">
              <Image
                src={article.images[0]}
                width={3843}
                height={2880}
                alt="main"
                className="max-h-[500px] max-w-[500px] object-cover rounded-l-sm brightness-75 hover:brightness-50 duration-200"
              />

              <div className="absolute bottom-0 text-white p-2">
                <div className="flex gap-2">
                  <Avatar>
                    <AvatarImage src="/main.jpg" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <div className="text-sm flex flex-col">
                    <div className="flex items-center gap-2">
                      <Phone className="w-[14px] h-[14px]" />
                      {article.phoneNumber}
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-[14px] h-[14px]" />
                      {article.location}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white p-2.5 rounded-r-sm flex flex-col flex-1">
              <div className="flex items-center justify-between">
                <h1 className="font-semibold whitespace-nowrap">
                  {article.title}
                </h1>
                <p className="font-bold">1000 lei</p>
              </div>
              <Badge className="bg-[#f2f4f5] text-black my-2.5 w-fit hover:bg-[#bfc1c2]">
                {article.location}
              </Badge>
              <p className="text-sm p-2.5">{article.articleInfo}</p>

              <div className="flex items-center justify-between mt-auto self-end w-full">
                <p className="font-semibold align-baseline text-xs">
                  Adăgat la 15 mai 2024
                </p>

                <Link
                  href={`tel:${article.phoneNumber}`}
                  className={buttonVariants()}
                >
                  <Phone className="w-[14px] h-[14px] mr-2.5" />
                  Sună
                </Link>
              </div>
            </div>
          </div>
        ))}

        <Button className="self-center">Vezi toate anunțurile</Button>
      </div>
    </div>
  );
};
