import create from "zustand";
import { devtools, persist } from "zustand/middleware";

interface ScheduleOpenStore {
  isOpen: boolean;
  setIsOpen: (status: boolean) => void;
}

export const useScheduleOpenStore = create<ScheduleOpenStore>()(
  devtools(
    persist((set) => ({
      isOpen: false,
      setIsOpen: (status: boolean) => set(() => ({ isOpen: status })),
    }))
  )
);
