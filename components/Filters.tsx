"use client";
import { facilitiesMapping } from "@/constants";
import { Facilities } from "@prisma/client";
import { Plus } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import qs from "query-string";

type FacilityType = keyof typeof Facilities;

export const Filters = () => {
  const facilitiesArray = Object.values(Facilities) as FacilityType[];

  const router = useRouter();
  const [selectedFacilities, setSelectedFacilities] = useState<FacilityType[]>(
    []
  );

  const handleFilterClick = (facility: FacilityType) => {
    const newSelectedFacilities = selectedFacilities.includes(facility)
      ? selectedFacilities.filter((item) => item !== facility)
      : [...selectedFacilities, facility];

    setSelectedFacilities(newSelectedFacilities);
  };

  useEffect(() => {
    const facilitatiString =
      selectedFacilities.length > 0 ? selectedFacilities.join(",") : undefined;

    const query = facilitatiString ? { facilitati: facilitatiString } : {};

    const url = qs.stringifyUrl({
      url: "/",
      query: query,
    });

    router.push(url, { scroll: false });
  }, [selectedFacilities, router]);

  return (
    <div className="shadow-indigo-500/90 shadow-sm rounded-md p-5">
      <h1 className="font-semibold whitespace-nowrap">
        Filtru facilități baltă
      </h1>
      {facilitiesArray.map((facility, index) => (
        <div
          onClick={() => handleFilterClick(facility)}
          key={index}
          className={`flex whitespace-nowrap my-2.5 items-center gap-2.5 bg-zinc-300 w-fit rounded-full p-2.5 hover:bg-zinc-500 transition-colors cursor-pointer ${
            selectedFacilities.includes(facility) ? "bg-zinc-500" : ""
          }`}
        >
          {facilitiesMapping[facility]}
          <Plus className="w-[15px] h-[15px] text-zinc-600" />
        </div>
      ))}
    </div>
  );
};
