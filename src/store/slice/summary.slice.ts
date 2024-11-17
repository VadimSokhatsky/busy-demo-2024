import {StateCreator} from "zustand/vanilla";

export type SummarySlice = {
    summary: string;
    setSummary: (value: string) => void;
    resetSummary: () => void;
}

export const createSummarySlice: StateCreator<SummarySlice> = (set) => ({
    summary: '',
    setSummary: (value) => set( (state) => ({ summary: value }) ),
    resetSummary: () => set( () => ({ summary: '' }) )
})