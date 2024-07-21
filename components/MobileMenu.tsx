"use client";
import { Menu, PlusCircle, Search, ShoppingBasket, Trophy } from "lucide-react";
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
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { navItems } from "@/constants";
import { usePathname } from "next/navigation";

export const MobileMenu = () => {
  const { isOpen, onOpen, onClose } = useMobileSheetMenu();

  const pathname = usePathname();

  return (
    <>
      <Sheet
        open={isOpen}
        onOpenChange={(open) => (open ? onOpen() : onClose())}
      >
        <SheetTrigger asChild>
          <button onClick={onOpen} className="md:hidden">
            <Menu />
          </button>
        </SheetTrigger>
        <SheetContent side="left">
          <SheetHeader className="mb-10">
            <SheetTitle>Meniu</SheetTitle>
          </SheetHeader>

          {navItems.map((navItem: any, idx: number) => (
            <Link
              key={`link=${idx}`}
              href={navItem.link}
              className={cn(
                "relative items-center flex space-x-1 group mb-10",
                pathname === navItem.link && "underline underline-offset-4 bg-[#f3f3f4] p-2.5 rounded-md w-fit"
              )}
            >
              {idx === 0 && (
                <PlusCircle
                  className={cn(
                    "text-muted-foreground h-4 w-4 group-hover:text-primary transition-colors",
                    pathname === navItem.link && "text-primary"
                  )}
                />
              )}

              {idx === 1 && (
                <ShoppingBasket
                  className={cn(
                    "text-muted-foreground h-4 w-4 group-hover:text-primary transition-colors",
                    pathname === navItem.link && "text-primary"
                  )}
                />
              )}
              {idx === 2 && (
                <Trophy
                  className={cn(
                    "text-muted-foreground h-4 w-4 group-hover:text-primary transition-colors",
                    pathname === navItem.link && "text-primary"
                  )}
                />
              )}
              {idx === 3 && (
                <Search
                  className={cn(
                    "text-muted-foreground h-4 w-4 group-hover:text-primary transition-colors",
                    pathname === navItem.link && "text-primary"
                  )}
                />
              )}
              {/* add !cursor-pointer */}
              {/* remove hidden sm:block for the mobile responsive */}
              <span
                className={cn(
                  "text-sm !cursor-pointer font-bold text-muted-foreground group-hover:text-primary transition-colors",
                  pathname === navItem.link && "text-primary"
                )}
              >
                {navItem.name}
              </span>
            </Link>
          ))}
          <Button
            variant="super"
            size="sm"
            className="hidden md:flex uppercase text-xs"
          >
            Contact
          </Button>
        </SheetContent>
      </Sheet>
    </>
  );
};
