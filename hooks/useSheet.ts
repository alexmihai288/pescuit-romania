import { create } from "zustand";

interface MobileSheetMenu {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

export const useMobileSheetMenu = create<MobileSheetMenu>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));
