"use client";
import React, { useEffect, useState } from "react";
import { PlaceholdersAndVanishInput } from "@/components/ui/PlaceholderInput";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useDebounce } from "@/hooks/useDebounce";
import qs from "query-string";

export const SearchArticle = () => {
  const router = useRouter();
  const [value, setValue] = useState<string>("");
  const debouncedValue = useDebounce(value, 500);

  useEffect(() => {
    const query = debouncedValue ? { title: debouncedValue } : {};

    const url = qs.stringifyUrl({
      url: `/articole`,
      query: query,
    });

    router.push(url, { scroll: false });
  }, [debouncedValue, router]);

  return (
    <div className="bg-white h-20 shadow-indigo-500/90 shadow-sm rounded-md w-full max-w-5xl container pt-5">
      <div className="flex items-center justify-between">
        <Image src="/rod.svg" width={20} height={20} alt="rod" />
        <Image src="/rod.svg" width={20} height={20} alt="rod" />
        <Image src="/rod.svg" width={20} height={20} alt="rod" />
        <Image src="/rod.svg" width={20} height={20} alt="rod" />
        <Image src="/rod.svg" width={20} height={20} alt="rod" />
        <PlaceholdersAndVanishInput
          placeholders={["feeder", "rod pod"]}
          onChange={(e: { target: { value: React.SetStateAction<string> } }) =>
            setValue(e.target.value)
          }
          onSubmit={() => {}}
        />
        <Image
          src="/rod.svg"
          width={20}
          height={20}
          alt="rod"
          className="flip-horizontal"
        />
        <Image
          src="/rod.svg"
          width={20}
          height={20}
          alt="rod"
          className="flip-horizontal"
        />
        <Image
          src="/rod.svg"
          width={20}
          height={20}
          alt="rod"
          className="flip-horizontal"
        />
        <Image
          src="/rod.svg"
          width={20}
          height={20}
          alt="rod"
          className="flip-horizontal"
        />{" "}
        <Image
          src="/rod.svg"
          width={20}
          height={20}
          alt="rod"
          className="flip-horizontal"
        />
      </div>
    </div>
  );
};
