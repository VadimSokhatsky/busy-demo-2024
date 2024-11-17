export interface Driver {
    firstName: string;
    lastName: string;
    age: number;
    experience: number;
    phone: string;
    email: string;
}

export const DRIVER_INITIAL: Driver = {
    firstName: '',
    lastName: '',
    age: 0,
    experience: 0,
    phone: '',
    email: '',
}