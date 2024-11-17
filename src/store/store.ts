import {create} from "zustand/react";
import {persist} from "zustand/middleware";

import {PageSlice, createPageSlice} from "./slice/page.slice";
import {DriverSlice, createDriverSlice} from "./slice/driver.slice";
import {BusSlice, createBusSlice} from "./slice/bus.slice";
import {SummarySlice, createSummarySlice} from "./slice/summary.slice";

export const useBoundStore = create(
    persist<PageSlice & DriverSlice & BusSlice & SummarySlice>((...a) => ({
        ...createPageSlice(...a),
        ...createDriverSlice(...a),
        ...createBusSlice(...a),
        ...createSummarySlice(...a),
    }),
        { name: 'busy-store' },
    )
);