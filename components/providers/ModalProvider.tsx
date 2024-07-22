"use client";

import { useEffect, useState } from "react";
import { ModalProvider } from "../ui/animated-modal";

export const ModalProviderComponent = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return <>
  </>;
};
