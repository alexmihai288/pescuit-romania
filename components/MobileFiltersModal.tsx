"use client";
import React, { useEffect, useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Plus, SlidersHorizontal } from "lucide-react";
import { Facilities } from "@prisma/client";
import { useRouter } from "next/navigation";
import qs from "query-string";
import { facilitiesMapping } from "@/constants";

type FacilityType = keyof typeof Facilities;

export const MobileFilters = () => {
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
    <DropdownMenu>
      <DropdownMenuTrigger>
        <SlidersHorizontal className="sm:hidden" />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>
          <h1 className="font-semibold whitespace-nowrap">
            Filtru facilități baltă
          </h1>
        </DropdownMenuLabel>
        <DropdownMenuSeparator className="bg-zinc-400" />
        {facilitiesArray.map((facility, index) => (
          <DropdownMenuItem
            onClick={() => handleFilterClick(facility)}
            key={index}
            className={`flex whitespace-nowrap my-2.5 items-center gap-2.5 bg-zinc-300 w-fit rounded-full p-2.5 hover:bg-zinc-500 transition-colors cursor-pointer ${
              selectedFacilities.includes(facility) ? "bg-zinc-500" : ""
            }`}
          >
            {facilitiesMapping[facility]}
            <Plus className="w-[15px] h-[15px] text-zinc-600" />
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
