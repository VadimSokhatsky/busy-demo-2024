import {StateCreator} from "zustand/vanilla";
import {Driver, DRIVER_INITIAL} from "../../types/driver.types";

export type DriverSlice = {
    driver: Driver;
    setDriver: (key: keyof Driver, value: string | number) => void;
    resetDriver: () => void;
}

export const createDriverSlice: StateCreator<DriverSlice> = (set) => ({
    driver: DRIVER_INITIAL,
    setDriver: (key, value) => set( (state) => ({ driver: { ...state.driver, [key]: value } }) ),
    resetDriver: () => set( () => ({ driver: DRIVER_INITIAL }) )
})