import {StateCreator} from "zustand/vanilla";

export type SummarySlice = {
    summary: string;
    setSummary: (value: string) => void;
    reset: () => void;
}

export const createSummarySlice: StateCreator<SummarySlice> = (set) => ({
    summary: '',
    setSummary: (value) => set( (state) => ({ summary: value }) ),
    reset: () => set( () => ({ summary: '' }) )
})