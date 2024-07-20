import { Filters } from "@/components/Filters";
import { Hero } from "@/components/Hero";
import { Lakes } from "@/components/Lakes";
import { MarketPlace } from "@/components/MarketPlace";
import { SearchLake } from "@/components/SearchLake";
import { buttonVariants } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { db } from "@/lib/db";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default async function Home({
  searchParams,
}: {
  searchParams: { nume: string; facilitati: string };
}) {
  let lakes;

  // Prepare filters based on searchParams
  const whereClause = {
    lakeName: {
      startsWith: searchParams.nume,
      mode: "insensitive", // Make the search case-insensitive if necessary
    },
  };

  if (searchParams.facilitati) {
    //@ts-ignore
    whereClause.facilities = {
      hasSome: searchParams.facilitati.split(","),
    };
  }

  lakes = await db.lake.findMany({
    //@ts-ignore
    where: whereClause,
    take: 9,
  });

  const articles = await db.article.findMany({
    orderBy: {
      createdAt: "desc",
    },
    take: 3,
  });

  return (
    <main>
      <div className="relative">
        <Hero />
        <div className="absolute -bottom-12 w-full flex justify-center">
          <SearchLake pathname="/" />
        </div>
      </div>
      <div className="my-32 container flex gap-10">
        <Filters />

        <div className="flex flex-col">
          {lakes.length > 0 && (
            <h1 className="text-xl font-semibold">Cele mai bune recenzii</h1>
          )}
          <ScrollArea className="h-screen p-2.5">
            <div className="mt-10">
              <Lakes initialLakes={lakes} numeCautat={searchParams.nume} />
            </div>
          </ScrollArea>
          <div className="flex justify-center">
            <Link
              href="/lacuri"
              className={cn(buttonVariants({ variant: "superOutline" }))}
            >
              Vezi toate bălțiile
            </Link>
          </div>
        </div>
      </div>

      <div className="bg-[#047857] p-2.5 my-32">
        <MarketPlace lastArticles={articles} />
      </div>
    </main>
  );
}
