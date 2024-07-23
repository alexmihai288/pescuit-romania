"use client";
import { Button } from "@/components/ui/button";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { Loader2 } from "lucide-react";
import React from "react";

export const VoteLake = ({ lakeId }: { lakeId: string }) => {
  const { mutate: vote, isPending } = useMutation({
    mutationFn: async ({ lakeId }: { lakeId: string }) => {
      const { data } = await axios.patch("/api/lake/vote", { lakeId });
      return data;
    },
  });

  return (
    <Button variant="primaryOutline" onClick={() => vote({ lakeId })}>
      {isPending && (
        <Loader2 className="animate-spin w-[16px] h-[16px] mr-2.5" />
      )}{" "}
      Votează top baltă
    </Button>
  );
};
