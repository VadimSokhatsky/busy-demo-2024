import {StateCreator} from "zustand/vanilla";
import {Bus, BUS_INITIAL} from "../../types/bus.types";

export type BusSlice = {
    bus: Bus;
    setBus: (key: keyof Bus, value: string | number) => void;
    resetBus: () => void;
}

export const createBusSlice: StateCreator<BusSlice> = (set) => ({
    bus: BUS_INITIAL,
    setBus: (key, value) => set( (state) => ({ bus: { ...state.bus, [key]: value } }) ),
    resetBus: () => set( () => ({ bus: BUS_INITIAL }) )
})