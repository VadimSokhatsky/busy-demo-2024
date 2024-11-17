import {useEffect} from "react";
import {useForm, Controller} from "react-hook-form";
import { Select, Input, Button } from "antd";

import {useBoundStore} from "../../store/store";
import {BusValidator} from "./bus.validator";

import {Bus} from "../../types/bus.types";
import { BUSES} from "./bus.data";

import './Bus.css';

const BusComponent = () => {

    const { bus, setBus, nextPage, prevPage } = useBoundStore();

    const { control, watch, handleSubmit, formState: { errors }, setValue } = useForm<Bus>({
        defaultValues: bus,
    });

    useEffect(() => {
        const subscription = watch((bus, { name, type }) => {
            if (type === 'change') {
                const key = name as keyof Bus;
                const value = bus[key] as string | number;
                setBus(key, value);
                if (name === 'brand') {
                    setValue('model', BUSES[value][0]);
                    setBus('model', BUSES[value][0]);
                }
            }
        });
        return () => subscription.unsubscribe();
    }, [watch]);

    const onSubmit = () => {
        if (!Object.keys(errors).length) nextPage();
    }

    return (
        <form className="bus" onSubmit={handleSubmit(onSubmit)}>
            <div className="bus__fields">
                <div className="bus__field">
                    <label htmlFor="brand">Manufacturer:</label>
                    <Controller
                        render={({field}) => (
                            <Select
                                id="brand"
                                options={Object.keys(BUSES).map((brand) => ({value: brand, label: brand}))}
                                {...field}
                            />
                        )}
                        name="brand"
                        control={control}
                        rules={{validate: BusValidator.brand}}
                    />
                    {errors.brand && <span className="driver__error">{errors.brand.message}</span>}
                </div>
                <div className="bus__field">
                    <label htmlFor="model">Model:</label>
                    <Controller
                        render={({field}) => (
                            <Select
                                id="model"
                                options={BUSES[bus.brand]?.map((model) => ({value: model, label: model}))}
                                {...field}
                            />
                        )}
                        name="model"
                        control={control}
                        rules={{validate: BusValidator.model}}
                    />
                    {errors.model && <span className="driver__error">{errors.model.message}</span>}
                </div>
                <div className="bus__field">
                    <label htmlFor="numbers">Numbers:</label>
                    <Controller
                        render={({field}) => <Input id="numbers" {...field}/>}
                        name="numbers"
                        control={control}
                        rules={{validate: BusValidator.numbers}}
                    />
                    {errors.numbers && <span className="driver__error">{errors.numbers.message}</span>}
                </div>
                <div className="bus__field">
                    <label htmlFor="year">Year of bus production:</label>
                    <Controller
                        render={({field}) => <Input id="year" type="number" {...field}/>}
                        name="year"
                        control={control}
                        rules={{validate: BusValidator.year}}
                    />
                    {errors.year && <span className="driver__error">{errors.year.message}</span>}
                </div>
            </div>
            <Button className="bus__next" htmlType="submit">Next</Button>
        </form>
    )
}

export default BusComponent;