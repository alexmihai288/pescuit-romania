import Link from "next/link";
import React from "react";
import { buttonVariants } from "./ui/button";
import { Article } from "@prisma/client";
import { cn } from "@/lib/utils";
import { Articles } from "@/app/articole/_components/Articles";

export const MarketPlace = ({ lastArticles }: { lastArticles: Article[] }) => {
  return (
    <div className="container">
      <h1 className="font-bold text-7xl text-white">Articole pescuit</h1>
      <p className="text-xs text-white">*Adăugate recent</p>
      <div className="flex flex-col gap-10 my-20">
        <Articles articles={lastArticles} />
        <Link href="/articole" className={cn(buttonVariants(), "self-center")}>
          Vezi toate articolele
        </Link>
      </div>
    </div>
  );
};
