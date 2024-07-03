import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { Badge } from "@/components/ui/badge";
import { navItems } from "@/constants";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="relative">
        <Image
          src="/main.jpg"
          width={3843}
          height={2880}
          alt="main"
          className="object-cover max-h-screen brightness-50"
        />
        <div className="self-center absolute text-white top-1/2 bottom-1/2 w-full flex justify-center">
          <div>
            <h1 className="font-bold text-7xl text-center">Pescuit România</h1>
            <div className="w-full flex justify-center mt-5">
              <p className="font-semibold max-w-md text-lg text-center ">
                Găsește locuri de interes pentru pescari! Bălți private, locuri
                publice, magazine cu articole de pescuit, locuri de cazare
                pentru pescari!
              </p>
            </div>
            <div className="flex justify-center mt-5">
              <Badge className="bg-emerald-700">Informații validate <Image src="/ro.svg" alt="ro" width={20} height={20} className="rounded-md ml-2"/></Badge>
            </div>
          </div>
        </div>
      </div>
      <p>test</p>
      <p>test</p>
      <p>test</p>
      <p>test</p>
      <p>test</p>
    </main>
  );
}
