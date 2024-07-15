"use client";
import React, { useEffect, useState } from "react";
import { PlaceholdersAndVanishInput } from "./ui/PlaceholderInput";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useDebounce } from "@/hooks/useDebounce";
import qs from "query-string";

export const SearchLake = () => {
  const router = useRouter();
  const [value, setValue] = useState<string>("");
  const debouncedValue = useDebounce(value, 500);

  useEffect(() => {
    const query = debouncedValue ? { nume: debouncedValue } : {};

    const url = qs.stringifyUrl({
      url: "/",
      query: query,
    });

    router.push(url, { scroll: false });
  }, [debouncedValue, router]);

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
          onChange={(e) => setValue(e.target.value)}
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
