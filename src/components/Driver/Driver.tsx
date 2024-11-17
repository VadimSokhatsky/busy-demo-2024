import {useEffect} from "react";
import {useForm, Controller} from "react-hook-form";
import { Input, DatePicker, Button } from "antd";

import {useBoundStore} from "../../store/store";
import {DriverValidator} from "./driver.validator";

import {Driver} from "../../types/driver.types";

import './Driver.css';

const DriverComponent = () => {

    const { driver, setDriver, nextPage } = useBoundStore();

    const { control, watch, handleSubmit, formState: { errors } } = useForm<Driver>({
        defaultValues: driver,
    });

    useEffect(() => {
        const subscription = watch((driver, { name, type }) => {
            if (type === 'change') {
                const key = name as keyof Driver;
                let value = driver[key] as string | number;
                if (key === 'age') value = new Date(value).getTime();
                setDriver(key, value);
            }
        });
        return () => subscription.unsubscribe();
    }, [watch]);

    const onSubmit = () => {
        if (!Object.keys(errors).length) nextPage();
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
                        rules={{ validate: DriverValidator.firstName }}
                    />
                    {errors.firstName && <span className="driver__error">{errors.firstName.message}</span>}
                </div>
                <div className="driver__field">
                    <label htmlFor="firstName">Last Name:</label>
                    <Controller
                        render={({ field }) => <Input id="lastName" {...field} />}
                        name="lastName"
                        control={control}
                        rules={{ validate: DriverValidator.lastName }}
                    />
                    {errors.lastName && <span className="driver__error">{errors.lastName.message}</span>}
                </div>
                <div className="driver__field">
                    <label htmlFor="age">Birth Date:</label>
                    <Controller
                        render={({ field }) => (
                            <DatePicker
                                id="age"
                                status={errors.age ? 'error' : undefined}
                                {...field}
                            />
                        )}
                        name="age"
                        control={control}
                        rules={{ validate: DriverValidator.age }}
                    />
                    {errors.age && <span className="driver__error">{errors.age.message}</span>}
                </div>
                <div className="driver__field">
                    <label htmlFor="experience">Experience (years):</label>
                    <Controller
                        render={({ field }) => (
                            <Input
                                id="experience"
                                type="number"
                                status={errors.experience ? 'error' : undefined}
                                {...field}
                            />
                        )}
                        name="experience"
                        control={control}
                        rules={{ validate: DriverValidator.experience }}
                    />
                    {errors.experience && <span className="driver__error">{errors.experience.message}</span>}
                </div>
                <div className="driver__field">
                    <label>Phone Number:</label>
                    <Controller
                        render={({ field }) => <Input id="phone" {...field} />}
                        name="phone"
                        control={control}
                        rules={{ validate: DriverValidator.phone }}
                    />
                    {errors.phone && <span className="driver__error">{errors.phone.message}</span>}
                </div>
                <div className="driver__field">
                    <label htmlFor="email">Email:</label>
                    <Controller
                        render={({ field }) => <Input id="email" type="email" {...field} />}
                        name="email"
                        control={control}
                        rules={{ validate: DriverValidator.email }}
                    />
                    {errors.email && <span className="driver__error">{errors.email.message}</span>}
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