import { create } from "zustand";

interface SignModal {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

export const useSignModal = create<SignModal>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));
