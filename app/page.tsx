import { Hero } from "@/components/Hero";
import { Lakes } from "@/components/Lakes";
import { SearchLake } from "@/components/SearchLake";

export default function Home() {
  return (
    <main>
      <div className="relative">
        <Hero />
        <div className="absolute -bottom-12 w-full flex justify-center">
          <SearchLake />
        </div>
      </div>
      <div className="my-32 container">
        <h1 className="text-xl font-semibold">Cele mai bune recenzii</h1>
        <div className="mt-10">
          <Lakes />
        </div>
      </div>


    </main>
  );
}
