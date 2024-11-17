import {Validation} from "../../types/validation.types";
import {Bus} from "../../types/bus.types";

export const BusValidator: Validation<Bus> = {
    brand: (value: string) => !!value || 'Required field',
    model: (value: string) => !!value || 'Required field',
    numbers: (value: string) => {
        const regex = new RegExp('^[A-Z]{3}-[0-9]{4}$');
        const result = regex.test(value);
        return value ? (result || 'Must be of XYZ-1234 format') : 'Required field';
    },
    year: (value: number) => {
        let result: boolean | string = true;
        if (value <= 0 || value > 2024) {
            result = 'Invalid year';
        } else if (value < 2010) {
            result = 'Minimum 2010';
        }
        return result;
    }
}