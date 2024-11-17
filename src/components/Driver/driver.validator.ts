import {Validation} from "../../types/validation.types";
import {Driver} from "../../types/driver.types";

export const DriverValidator: Validation<Driver> = {
    firstName: (value: string) => !!value || 'Required field',
    lastName: (value: string) => !!value || 'Required field',
    age: (value: Date) => {
        const now = new Date().getTime();
        const age = new Date(value).getTime();
        const year = (1000 * 60 * 60 * 24 * 365);
        const result = now - age > (year * 25);
        return value ? (result || 'You need to be of 25 years age minimum') : 'Required field';
    },
    experience: (value: number) => value >= 2 || '2 years minimum',
    phone: (value: string) => {
        const regex = new RegExp('^(\\([0-9]{3}\\) |[0-9]{3}-)[0-9]{3}-[0-9]{4}$');
        const result = regex.test(value);
        return value ? (result || 'Must be of (XXX) XXX-XXXX format') : 'Required field';
    },
    email: (value: string) => {
        const regex =  new RegExp(/^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/);
        const result = regex.test(value);
        return value ? (result || 'Not valid email') : 'Required field';
    },
}