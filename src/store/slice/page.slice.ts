import {StateCreator} from "zustand/vanilla";

export type PageSlice = {
    page: number;
    nextPage: () => void;
    reset: () => void;
}

export const createPageSlice: StateCreator<PageSlice> = (set) => ({
    page: 1,
    nextPage: () => set( (state: PageSlice) => ({ page: state.page + 1 }) ),
    reset: () => set( () => ({ page: 1 }) ),
})