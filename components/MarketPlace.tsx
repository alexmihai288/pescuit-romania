import Link from "next/link";
import React from "react";
import { buttonVariants } from "./ui/button";
import { Article } from "@prisma/client";
import { cn } from "@/lib/utils";
import { Articles } from "@/app/articole/_components/Articles";

export const MarketPlace = ({ lastArticles }: { lastArticles: Article[] }) => {
  return (
    <div className="container">
      <h1 className="font-bold text-5xl text-center sm:text-6xl sm:text-left md:text-7xl whitespace-nowrap text-white mb-2.5">Articole pescuit</h1>
      <p className="text-xs text-white text-center sm:text-left">*Adăugate recent</p>
      <div className="flex flex-col gap-10 my-20">
        <Articles articles={lastArticles} />
        <Link href="/articole" className={cn(buttonVariants(), "self-center")}>
          Vezi toate articolele
        </Link>
      </div>
    </div>
  );
};
