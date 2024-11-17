import {StateCreator} from "zustand/vanilla";

export type PageSlice = {
    page: number;
    nextPage: () => void;
    prevPage: () => void;
    goHome: () => void;
}

export const createPageSlice: StateCreator<PageSlice> = (set) => ({
    page: 1,
    nextPage: () => set( (state: PageSlice) => ({ page: state.page + 1 }) ),
    prevPage: () => set( (state: PageSlice) => ({ page: state.page - 1 }) ),
    goHome: () => set( () => ({ page: 1 }) ),
})