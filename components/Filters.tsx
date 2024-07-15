import { AddFacilities } from "@/app/adauga-balta/_components/AddFacilities";
import { facilitiesMapping } from "@/constants";
import { Facilities } from "@prisma/client";
import { Plus } from "lucide-react";
import React from "react";

export const Filters = () => {
  const facilitiesArray = Object.values(Facilities);

  return (
    <div className="shadow-indigo-500/90 shadow-sm rounded-md p-5">
      <h1 className="font-semibold whitespace-nowrap">Filtru facilități baltă</h1>
      {facilitiesArray.map((facility, index) => (
        <div
          // onClick={() => handleAddFacility(facility)}
          key={index}
          className="flex whitespace-nowrap my-2.5 items-center gap-2.5 bg-zinc-300 w-fit rounded-full p-2.5 hover:bg-zinc-500 transition-colors cursor-pointer"
        >
          {facilitiesMapping[facility]}
          <Plus className="w-[15px] h-[15px] text-zinc-600" />
        </div>
      ))}
    </div>
  );
};
