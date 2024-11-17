import {create} from "zustand/react";

import {PageSlice, createPageSlice} from "./slice/page.slice";

export const useBoundStore = create<PageSlice>()((...a) => ({
    ...createPageSlice(...a),
}));