import { db } from "@/lib/db";
import React from "react";
import { LakeHero } from "../_components/LakeHero";
import { CgDetailsMore } from "react-icons/cg";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { MdOutlineStorage } from "react-icons/md";
import { LuTreePine } from "react-icons/lu";

const LakePage = async ({ params }: { params: { lakeName: string } }) => {
  const lake = await db.lake.findFirst({
    where: {
      lakeName: params.lakeName,
    },
  });

  return (
    <main className="bg-[#f3f4f6]">
      <div>
        <LakeHero lake={lake!} />
      </div>
      <div className="container my-32">
        <div className="flex justify-between bg-white rounded-md shadow-2xl">
          <div className="p-2.5">
            <h1 className="font-extrabold flex items-center gap-2">
              <CgDetailsMore /> Detalii
            </h1>
            <p className="text-sm">{lake?.lakeInfo}</p>
          </div>
          <Carousel>
            <CarouselContent className="max-w-3xl">
              {lake?.galleryImageUrls.map((galleryImg) => (
                <CarouselItem key={galleryImg}>
                  <Image
                    src={galleryImg}
                    width={800}
                    height={800}
                    alt="gallery image"
                    className="rounded-r-md"
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>

      <div className="container">
        <h1 className="font-extrabold flex items-center gap-2 mb-10">
          <MdOutlineStorage />
          Facilități
        </h1>

        <div className="grid grid-cols-3 space-y-5">
          <div className="flex items-center gap-2 justify-center">
            <div className="rounded-full bg-zinc-300 p-4 w-fit">
              <LuTreePine className="text-green-500" />
            </div>
            <p className="font-semibold tracking-tight">Umbră</p>
          </div>
          <div className="flex items-center gap-2 justify-center">
            <div className="rounded-full bg-zinc-300 p-4 w-fit">
              <LuTreePine className="text-green-500" />
            </div>
            <p className="font-semibold tracking-tight">Umbră</p>
          </div>{" "}
          <div className="flex items-center gap-2 justify-center">
            <div className="rounded-full bg-zinc-300 p-4 w-fit">
              <LuTreePine className="text-green-500" />
            </div>
            <p className="font-semibold tracking-tight">Umbră</p>
          </div>
          <div className="flex items-center gap-2 justify-center">
            <div className="rounded-full bg-zinc-300 p-4 w-fit">
              <LuTreePine className="text-green-500" />
            </div>
            <p className="font-semibold tracking-tight">Umbră</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default LakePage;
