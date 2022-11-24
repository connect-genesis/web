import create from "zustand";
import { devtools, persist } from "zustand/middleware";

interface ScheduleDetailsStore {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  details: string;
  date: string;
  startTime: string;
  endTime: string;
  isSubmitted: boolean;

  setFirstName: (firstName: string) => void;
  setLastName: (lastName: string) => void;
  setEmail: (e: string) => void;
  setPhone: (phone: string) => void;
  setDetails: (details: string) => void;
  setStartTime: (st: string) => void;
  setEndTime: (et: string) => void;
  setDate: (d: string) => void;
  setIsSubmitted: (is: boolean) => void;
  deleteEverything: () => void;
}

export const useScheduleDetailsStore = create<ScheduleDetailsStore>()(
  devtools(
    persist((set) => ({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      details: "",
      date: "",
      startTime: "",
      endTime: "",
      isSubmitted: false,

      setFirstName: (firstName: string) =>
        set(() => ({ firstName: firstName })),
      setLastName: (lastName: string) => set(() => ({ lastName: lastName })),
      setEmail: (e: string) => set(() => ({ email: e })),
      setPhone: (p: string) => set(() => ({ phone: p })),
      setDetails: (details: string) => set(() => ({ details: details })),

      setStartTime: (st: string) => set(() => ({ startTime: st })),
      setEndTime: (et: string) => set(() => ({ endTime: et })),
      setDate: (d: string) => set(() => ({ date: d })),
      setIsSubmitted: (s: boolean) => set(() => ({ isSubmitted: s })),
      deleteEverything: () => set({}, true),
    }))
  )
);
