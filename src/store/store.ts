import {create} from "zustand/react";

import {PageSlice, createPageSlice} from "./slice/page.slice";
import {DriverSlice, createDriverSlice} from "./slice/driver.slice";
import {BusSlice, createBusSlice} from "./slice/bus.slice";

export const useBoundStore = create<PageSlice & DriverSlice & BusSlice>()((...a) => ({
    ...createPageSlice(...a),
    ...createDriverSlice(...a),
    ...createBusSlice(...a),
}));