"use client";
import { Separator } from "@/components/ui/separator";
import { Facilities } from "@prisma/client";
import { Check, Plus, X } from "lucide-react";
import React, { useState } from "react";
import { UseFormGetValues, UseFormSetValue } from "react-hook-form";

const facilitiesMapping = {
  PlataCard: "Plata Card",
  AccesMasina: "Acces Mașină",
  Casute: "Căsuțe",
  Gratar: "Grătar",
  Iluminat: "Iluminat",
  InchirieriBarci: "Închirieri Bărci",
  Internet: "Internet",
  LocPentruCopii: "Loc Pentru Copii",
  MagazinMomeala: "Magazin Momeală",
  Pontoane: "Pontoane",
  Toalete: "Toalete",
  Umbra: "Umbră",
};

export const AddFacilities = ({
  setValue,
  getValues,
}: {
  setValue: UseFormSetValue<{
    nume_balta: string;
    adresa: string;
    logo: string;
    imagine_coperta: string;
    galerie: string[];
    facilitati: string[];
    telefon: string;
    adresa_mail: string;
    nume_administrator: string;
    descriere_regulament: string;
  }>;
  getValues: UseFormGetValues<{
    nume_balta: string;
    adresa: string;
    logo: string;
    imagine_coperta: string;
    galerie: string[];
    facilitati: string[];
    telefon: string;
    adresa_mail: string;
    nume_administrator: string;
    descriere_regulament: string;
  }>;
}) => {
  const facilitiesArray = Object.values(Facilities);

  const [addedFacilities, setAddedFacilities] = useState<string[]>([]);
  const [hoveredFacility, setHoveredFacility] = useState<string | null>(null);

  const handleAddFacility = (facility: string) => {
    const currentFacilities = getValues("facilitati");
    const updatedFacilities = [...currentFacilities, facility];
    setValue("facilitati", updatedFacilities);
    setAddedFacilities((prev) => {
      if (prev.includes(facility)) {
        return prev; // Don't add duplicates
      }
      return [...prev, facility];
    });
  };

  const handleRemoveFacility = (facility: string) => {
    const currentFacilities = getValues("facilitati");
    const updatedFacilities = currentFacilities.filter(
      (item) => item !== facility
    );
    setValue("facilitati", updatedFacilities);
    setAddedFacilities((prev) => prev.filter((item) => item !== facility));
  };

  return (
    <>
      <div className="grid grid-cols-3 gap-2.5 justify-center">
        {facilitiesArray
          .filter((facility) => !addedFacilities.includes(facility))
          .map((facility, index) => (
            <div
              onClick={() => handleAddFacility(facility)}
              key={index}
              className="flex items-center gap-2.5 bg-zinc-300 w-fit rounded-full p-2.5 hover:bg-zinc-500 transition-colors cursor-pointer"
            >
              {facilitiesMapping[facility]}
              <Plus className="w-[15px] h-[15px] text-zinc-600" />
            </div>
          ))}
      </div>
      <Separator orientation="horizontal" />
      <div className="flex items-center gap-2.5 flex-wrap">
        {addedFacilities.map((facility, index) => (
          <div
            key={index}
            className="flex items-center gap-2.5 bg-green-300 w-fit rounded-full p-2.5 hover:bg-green-500 transition-colors cursor-pointer"
            onMouseEnter={() => setHoveredFacility(facility)}
            onMouseLeave={() => setHoveredFacility(null)}
            onClick={() => handleRemoveFacility(facility)}
          >
            {/* @ts-ignore */}
            {facilitiesMapping[facility]}
            {hoveredFacility === facility ? (
              <X className="w-[15px] h-[15px] text-red-600" />
            ) : (
              <Check className="w-[15px] h-[15px] text-green-600" />
            )}
          </div>
        ))}
      </div>
    </>
  );
};
