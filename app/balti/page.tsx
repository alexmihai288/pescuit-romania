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

const BaltiPage = async ({
  searchParams,
}: {
  searchParams: { nume: string };
}) => {
  let lakes;

  // Prepare filters based on searchParams
  const whereClause = {
    lakeName: {
      startsWith: searchParams.nume,
      mode: "insensitive", // Make the search case-insensitive if necessary
    },
  };

  lakes = await db.lake.findMany({
    //@ts-ignore
    where: whereClause,
  });

  return (
    <div className="container pt-40">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Acasă</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />

          <BreadcrumbItem>
            <BreadcrumbPage className="font-semibold">Bălți</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="mt-10">
        <SearchLake />
      </div>

      <div className="mt-10">
        <Lakes initialLakes={lakes} numeCautat={searchParams.nume} />
      </div>
    </div>
  );
};

export default BaltiPage;
