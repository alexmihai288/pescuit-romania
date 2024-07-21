"use client";
import { Menu } from "lucide-react";
import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { useMobileSheetMenu } from "@/hooks/useSheet";

export const MobileMenu = () => {
  const { isOpen, onOpen, onClose } = useMobileSheetMenu();

  console.log(isOpen)
  return (
    <>
      <Sheet
        open={isOpen}
        onOpenChange={(open) => (open ? onOpen() : onClose())}
      >
        <SheetTrigger asChild>
          <button onClick={onOpen}>
            <Menu />
          </button>
        </SheetTrigger>
        <SheetContent side="left">
          <SheetHeader>
            <SheetTitle>Are you absolutely sure?</SheetTitle>
            <SheetDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </>
  );
};
