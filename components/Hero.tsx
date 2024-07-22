import Image from "next/image";
import React from "react";
import { Badge } from "./ui/badge";
import { Separator } from "./ui/separator";
import Link from "next/link";
import { SignUpModal } from "./SignUpModal";

export const Hero = () => {
  return (
    <div className="relative">
      <Image
        src="/main.jpg"
        width={3843}
        height={2880}
        alt="main"
        className="object-cover max-h-screen min-h-[500px] brightness-50"
      />
      <div className="hidden xl:flex self-center absolute top-10 bg-white right-5 h-10 rounded-md justify-end">
        <div className="flex items-center justify-center gap-2.5 py-2.5 px-5">
          <Link href="/register">
            <p className="text-sm font-bold">Intră în cont</p>
          </Link>
          <Separator orientation="vertical" className="bg-indigo-500 w-1" />
          <SignUpModal />
        </div>
      </div>
      <div className="self-center absolute text-white top-1/2 bottom-1/2 w-full flex justify-center">
        <div>
          <h1 className="font-bold text-5xl text-center sm:text-6xl md:text-7xl">
            Pescuit România
          </h1>
          <div className="w-full flex justify-center mt-5">
            <p className="font-semibold max-w-md sm:text-lg text-center ">
              Găsește locuri de interes pentru pescari! Bălți private, locuri
              publice, magazine cu articole de pescuit, locuri de cazare pentru
              pescari!
            </p>
          </div>
          <div className="flex justify-center mt-5">
            <Badge className="bg-emerald-700">
              Informații validate{" "}
              <Image
                src="/ro.svg"
                alt="ro"
                width={20}
                height={20}
                className="rounded-md ml-2"
              />
            </Badge>
          </div>
        </div>
      </div>
    </div>
  );
};
