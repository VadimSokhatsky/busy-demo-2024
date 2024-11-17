import {create} from "zustand/react";

import {PageSlice, createPageSlice} from "./slice/page.slice";
import {DriverSlice, createDriverSlice} from "./slice/driver.slice";

export const useBoundStore = create<PageSlice & DriverSlice>()((...a) => ({
    ...createPageSlice(...a),
    ...createDriverSlice(...a),
}));