import { Filters } from "@/components/Filters";
import { Hero } from "@/components/Hero";
import { Lakes } from "@/components/Lakes";
import { SearchLake } from "@/components/SearchLake";
import { db } from "@/lib/db";

export default async function Home({
  searchParams,
}: {
  searchParams: { nume: string };
}) {
  let lakes;
  lakes = await db.lake.findMany({
    where: {
      lakeName: {
        startsWith: searchParams.nume,
        mode: "insensitive", // Make the search case-insensitive if necessary
      },
    },
  });

  return (
    <main>
      <div className="relative">
        <Hero />
        <div className="absolute -bottom-12 w-full flex justify-center">
          <SearchLake />
        </div>
      </div>
      <div className="my-32 container flex gap-10">
        <Filters />
        <div>
          {lakes.length > 0 && (
            <h1 className="text-xl font-semibold">Cele mai bune recenzii</h1>
          )}
          <div className="mt-10">
            <Lakes initialLakes={lakes} numeCautat={searchParams.nume} />
          </div>
        </div>
      </div>
      <p>test</p>
      <p>test</p>
      <p>test</p>
      <p>test</p>
      <p>test</p>
      <p>test</p>
      <p>test</p>
      <p>test</p>
      <p>test</p>
      <p>test</p>
      <p>test</p>
      <p>test</p>
      <p>test</p>
      <p>test</p>
      <p>test</p>
      <p>test</p>
      <p>test</p>
      <p>test</p>
      <p>test</p>
      <p>test</p>
      <p>test</p>
      <p>test</p>
      <p>test</p>
      <p>test</p>
      <p>test</p>
      <p>test</p>
      <p>test</p>
      <p>test</p>
      <p>test</p>
      <p>test</p>
    </main>
  );
}
