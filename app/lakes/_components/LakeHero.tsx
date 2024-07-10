import Image from "next/image";
import React from "react";
// import { Badge } from "./ui/badge";
// import { Separator } from "./ui/separator";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Lake } from "@prisma/client";
import { MapPin, Phone } from "lucide-react";

export const LakeHero = ({ lake }: { lake: Lake }) => {
  return (
    <div className="relative">
      <Image
        src={lake.mainImageUrl}
        width={3843}
        height={2880}
        alt="main"
        className="object-cover max-h-[80vh] brightness-50"
      />
      <div className="self-center absolute top-10 bg-white right-5 h-10 rounded-md flex justify-end">
        <div className="flex items-center justify-center gap-2.5 py-2.5 px-5">
          <Link href="/login">
            <p className="text-sm font-bold">Intră în cont</p>
          </Link>
          {/* <Separator orientation="vertical" className="bg-indigo-500 w-1" /> */}
          <Link href="/register">
            <p className="text-sm font-bold">Creează cont</p>
          </Link>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 text-white w-full">
        <div className="container">
          <div className="absolute bottom-0 text-white p-2">
            <div className="flex gap-2">
              <Avatar>
                <AvatarImage src={lake.logoUrl} />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div className="flex flex-col">
                <p className="font-semibold">{lake.lakeName}</p>
                <div className="flex items-center gap-2">
                  <Phone className="w-[14px] h-[14px]" />
                  {lake.phoneNumber}
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-[14px] h-[14px]" />
                  {lake.location}
                </div>
              </div>
            </div>
          </div>
          {/* <div className="flex justify-center mt-5">
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
          </div> */}
        </div>
      </div>
    </div>
  );
};
