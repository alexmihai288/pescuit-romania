"use client";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "./button";
import { Menu, PlusCircle, Search, ShoppingBasket, Trophy } from "lucide-react";
import { usePathname } from "next/navigation";
import { MobileMenu } from "../MobileMenu";
import { useMobileSheetMenu } from "@/hooks/useSheet";
import { useSignModal } from "@/hooks/useSignModal";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const pathname = usePathname();
  const { scrollYProgress } = useScroll();

  // set true for the initial state so that nav bar is visible in the hero section
  const [visible, setVisible] = useState(true);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
      let direction = current! - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.05) {
        // also set true for the initial state
        setVisible(true);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  const { isOpen: isMobileSheetOpen } = useMobileSheetMenu();
  const { isOpen: isSignModalOpen } = useSignModal();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          // change rounded-full to rounded-lg
          // remove dark:border-white/[0.2] dark:bg-black bg-white border-transparent
          // change  pr-2 pl-8 py-2 to px-10 py-5
          "flex max-w-fit md:min-w-[70vw] lg:min-w-fit fixed z-[5000] top-10 inset-x-0 mx-10 md:mx-auto px-5 md:px-10 py-5 rounded-lg border border-black/.1 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] items-center justify-center space-x-12 md:space-x-4",
          className
        )}
        style={{
          backdropFilter: "blur(16px) saturate(180%)",
          backgroundColor: "white",
          borderRadius: "12px",
          border: "1px solid rgba(255, 255, 255, 0.125)",
          zIndex: isMobileSheetOpen || isSignModalOpen ? "1" : "100",
        }}
      >
        <MobileMenu />
        {navItems.map((navItem: any, idx: number) => (
          <Link
            key={`link=${idx}`}
            href={navItem.link}
            className={cn(
              "relative items-center hidden md:flex space-x-1 group",
              pathname === navItem.link && "underline underline-offset-4"
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
        {/* remove this login btn */}
        {/* <button className="border text-sm font-medium relative border-neutral-200 dark:border-white/[0.2] text-black dark:text-white px-4 py-2 rounded-full">
          <span>Login</span>
          <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent  h-px" />
        </button> */}
      </motion.div>
    </AnimatePresence>
  );
};
