import { Hero } from "@/components/Hero";
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
      <div className="mt-12">
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
      </div>
    </main>
  );
}
