import { Filters } from "@/components/Filters";
import { Hero } from "@/components/Hero";
import { Lakes } from "@/components/Lakes";
import { MarketPlace } from "@/components/MarketPlace";
import { MobileFilters } from "@/components/MobileFiltersModal";
import { SearchLake } from "@/components/SearchLake";
import { TopLocations } from "@/components/TopLocations";
import { buttonVariants } from "@/components/ui/button";
import { InfiniteMovingCards } from "@/components/ui/InfiniteMovingCards";
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

  const latestArticles = await db.article.findMany({
    orderBy: {
      createdAt: "desc",
    },
    take: 3,
  });

  const randomArticles = await db.article.findMany({
    // skip: Math.floor(Math.random() * (await db.article.count()) - 1), // Ensure this skips to a valid start point
    take: 4,
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
        <div className="hidden sm:block">
          <Filters />
        </div>

        <div className="flex flex-col">
          {lakes.length > 0 && (
            <div className="flex items-center justify-between">
              <h1 className="text-xl font-semibold">Cele mai bune recenzii</h1>
              <MobileFilters />
            </div>
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

      <div className="bg-[#047857] p-2.5">
        <div
          // remove bg-white dark:bg-black dark:bg-grid-white/[0.05], h-[40rem] to 30rem , md:h-[30rem] are for the responsive design
          className="h-[50vh] md:h-[30rem] rounded-md flex flex-col antialiased  items-center justify-center relative overflow-hidden"
        >
          <div className="container">
            <p className="text-xs text-white text-center sm:text-left w-full">
              *Adăugate recent
            </p>
          </div>

          <InfiniteMovingCards
            items={latestArticles}
            direction="right"
            speed="slow"
          />
        </div>
        <MarketPlace articles={randomArticles} />
      </div>
      <TopLocations topLakes={lakes} />
    </main>
  );
}
