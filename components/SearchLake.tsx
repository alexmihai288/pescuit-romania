"use client";
import React from "react";
import { PlaceholdersAndVanishInput } from "./ui/PlaceholderInput";
import Image from "next/image";

export const SearchLake = () => {
  return (
    <div className="bg-white h-20 shadow-indigo-500/90 shadow-sm rounded-md w-full max-w-5xl container pt-5">
      <div className="flex items-center justify-between">
        <Image src="/fish.svg" width={20} height={20} alt="fish" />
        <Image src="/fish.svg" width={20} height={20} alt="fish" />
        <Image src="/fish.svg" width={20} height={20} alt="fish" />
        <Image src="/fish.svg" width={20} height={20} alt="fish" />
        <Image src="/fish.svg" width={20} height={20} alt="fish" />
        <PlaceholdersAndVanishInput
          placeholders={["Lake1", "Lake2"]}
          onChange={() => {}}
          onSubmit={() => {}}
        />
        <Image
          src="/fish.svg"
          width={20}
          height={20}
          alt="fish"
          className="flip-horizontal"
        />
        <Image
          src="/fish.svg"
          width={20}
          height={20}
          alt="fish"
          className="flip-horizontal"
        />
        <Image
          src="/fish.svg"
          width={20}
          height={20}
          alt="fish"
          className="flip-horizontal"
        />
        <Image
          src="/fish.svg"
          width={20}
          height={20}
          alt="fish"
          className="flip-horizontal"
        />{" "}
        <Image
          src="/fish.svg"
          width={20}
          height={20}
          alt="fish"
          className="flip-horizontal"
        />  
      </div>
    </div>
  );
};
