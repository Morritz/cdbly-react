import create from "zustand";
import { combine } from "zustand/middleware";

const useTableStore = create(
  combine({ idInput: 0 }, (set) => ({
    setIdInput: (value: number) => set((state) => ({ idInput: value })),
  }))
);

export { useTableStore };
