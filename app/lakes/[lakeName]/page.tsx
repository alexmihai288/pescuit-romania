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

      <div>test</div>
    </main>
  );
};

export default LakePage;
