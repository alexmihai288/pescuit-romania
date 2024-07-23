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
import { AiOutlineCar } from "react-icons/ai";
import {
  FaHome,
  FaLightbulb,
  FaWifi,
  FaChild,
  FaStore,
  FaToilet,
  FaUmbrella,
} from "react-icons/fa";
import { TbGrill } from "react-icons/tb";
import { LuSailboat } from "react-icons/lu";
import { CiCreditCard1 } from "react-icons/ci";
import { GiWoodenCrate } from "react-icons/gi";

interface Facility {
  label: string;
  icon: JSX.Element;
}

// Define a type for the facilities mapping
type FacilitiesMapping = {
  [key: string]: Facility;
};

// Create the facilitiesMapping object with the defined type
const facilitiesMapping: FacilitiesMapping = {
  PlataCard: { label: "Plata Card", icon: <CiCreditCard1 /> },
  AccesMasina: { label: "Acces Mașină", icon: <AiOutlineCar /> },
  Casute: { label: "Căsuțe", icon: <FaHome /> },
  Gratar: { label: "Grătar", icon: <TbGrill /> },
  Iluminat: { label: "Iluminat", icon: <FaLightbulb /> },
  InchirieriBarci: { label: "Închirieri Bărci", icon: <LuSailboat /> },
  Internet: { label: "Internet", icon: <FaWifi /> },
  LocPentruCopii: { label: "Loc Pentru Copii", icon: <FaChild /> },
  MagazinMomeala: { label: "Magazin Momeală", icon: <FaStore /> },
  Pontoane: { label: "Pontoane", icon: <GiWoodenCrate /> },
  Toalete: { label: "Toalete", icon: <FaToilet /> },
  Umbra: { label: "Umbră", icon: <FaUmbrella /> },
};

const LakePage = async ({ params }: { params: { lakeName: string } }) => {
  const decodedLakeName = decodeURIComponent(params.lakeName);

  const lake = await db.lake.findFirst({
    where: {
      lakeName: decodedLakeName,
    },
  });

  return (
    <main className="bg-[#f3f4f6]">
        <LakeHero lake={lake!} />
      <div className="container my-20 sm:my-32">
        <div className="flex flex-col sm:flex-row sm:justify-between bg-white rounded-md shadow-2xl">
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
                    className="rounded-b-md sm:rounded-r-md"
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
        <h1
          className="font-extr
        abold flex items-center gap-2 mb-10"
        >
          <MdOutlineStorage />
          Facilități
        </h1>

        <div className="grid grid-cols-3 gap-5 items-center justify-center justify-items-start mb-20 sm:mb-32">
          {lake?.facilities.map((facility) => (
            <div
              className="flex items-center gap-2 justify-center"
              key={facility}
            >
              <div className="rounded-full bg-zinc-300 p-4 w-fit">
                {/* <LuTreePine className="text-green-500" /> */}
                {facilitiesMapping[facility].icon}
              </div>
              <p className="font-semibold tracking-tight">
                {facilitiesMapping[facility].label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="container">
        <div>pai naa</div>
      </div>
    </main>
  );
};

export default LakePage;
