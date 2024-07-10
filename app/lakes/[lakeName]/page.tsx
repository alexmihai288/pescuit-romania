import { Hero } from "@/components/Hero";
import { db } from "@/lib/db";
import React from "react";
import { LakeHero } from "../_components/LakeHero";

const LakePage = async ({ params }: { params: { lakeName: string } }) => {
  const lake = await db.lake.findFirst({
    where: {
      lakeName: params.lakeName,
    },
  });

  return (
    <main>
      <div>
      <LakeHero lake={lake!}/>
      </div>
      <div className="my-32 container"></div>
    </main>
  );
};

export default LakePage;
