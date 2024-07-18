import { Lakes } from "@/components/Lakes";
import { SearchLake } from "@/components/SearchLake";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { db } from "@/lib/db";
import React from "react";
import { Articles } from "./_components/Articles";
import { SearchArticle } from "./_components/SearchArticle";

const ArticolePage = async ({
  searchParams,
}: {
  searchParams: { title: string };
}) => {
  let articles;

  // Prepare filters based on searchParams
  const whereClause = {
    title: {
      startsWith: searchParams.title,
      mode: "insensitive", // Make the search case-insensitive if necessary
    },
  };

  articles = await db.article.findMany({
    //@ts-ignore
    where: whereClause,
  });

  return (
    <div className="bg-[#047857]">
      <div className="container pt-40">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/" className="text-gray-200 hover:text-gray-300">Acasă</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator className="text-gray-200"/>

            <BreadcrumbItem>
              <BreadcrumbPage className="font-semibold text-white">
                Articole
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <div className="mt-10">
        <SearchArticle/>
      </div>

        <div className="mt-10">
          <Articles articles={articles} />
        </div>
      </div>
    </div>
  );
};

export default ArticolePage;
