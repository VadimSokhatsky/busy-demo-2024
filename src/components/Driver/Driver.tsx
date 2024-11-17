import {useEffect} from "react";
import {useForm, Controller} from "react-hook-form";
import { Input, DatePicker, Button } from "antd";

import {useBoundStore} from "../../store/store";
import {Driver} from "../../types/driver.types";

import './Driver.css';

const DriverComponent = () => {

    const { driver, setDriver } = useBoundStore();

    const { control, watch, handleSubmit } = useForm<Driver>({
        defaultValues: driver,
    });

    useEffect(() => {
        const subscription = watch((driver, { name, type }) => {
            if (type === 'change') {
                const key = name as keyof Driver;
                const value = driver[key] as string | number;
                setDriver(key, value);
            }
        });
        return () => subscription.unsubscribe();
    }, [watch])


    const onSubmit = () => {

    }

    return (
        <form className="driver" onSubmit={handleSubmit(onSubmit)}>
            <div className="driver__fields">
                <div className="driver__field">
                    <label htmlFor="firstName">First Name:</label>
                    <Controller
                        render={({ field }) => <Input id="firstName" {...field} />}
                        name="firstName"
                        control={control}
                    />
                </div>
                <div className="driver__field">
                    <label htmlFor="firstName">Last Name:</label>
                    <Controller
                        render={({ field }) => <Input id="lastName" {...field} />}
                        name="lastName"
                        control={control}
                    />
                </div>
                <div className="driver__field">
                    <label htmlFor="age">Birth Date:</label>
                    <Controller
                        render={({ field }) => <DatePicker id="age" {...field} />}
                        name="age"
                        control={control}
                    />
                </div>
                <div className="driver__field">
                    <label htmlFor="experience">Experience (years):</label>
                    <Input/>
                </div>
                <div className="driver__field">
                    <label>Phone Number:</label>
                    <Controller
                        render={({ field }) => <Input id="experience" {...field} />}
                        name="phone"
                        control={control}
                    />
                </div>
                <div className="driver__field">
                    <label htmlFor="email">Email:</label>
                    <Controller
                        render={({ field }) => <Input id="email" {...field} />}
                        name="email"
                        control={control}
                    />
                </div>
            </div>
            <Button
                className="driver__next"
                htmlType="submit"
            >
                Next
            </Button>
        </form>
    )
}

export default DriverComponent;