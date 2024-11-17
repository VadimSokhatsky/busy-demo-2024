import {Button} from "antd";

import {useBoundStore} from "../../store/store";

import './Outro.css';

const Outro = () => {

    const {
        driver, resetDriver,
        bus, resetBus,
        summary, resetSummary,
        goHome,
    } = useBoundStore();

    const DRIVER_FIELDS = [
        ['First Name', driver.firstName],
        ['Last Name', driver.lastName],
        ['Birth Date', new Date(driver.age).toDateString()],
        ['Experience', `${driver.experience} years`,],
        ['Phone', driver.phone],
        ['Email', driver.email],
    ];

    const BUS_FIELDS = [
        ['Manufacturer', bus.brand],
        ['Model', bus.model],
        ['Numbers', bus.numbers],
        ['Year of production', bus.year],
    ];

    const handleGoHome = () => {
        resetDriver();
        resetBus();
        resetSummary();
        goHome();
    }

    return (
        <div className="outro">
            <span>Thanks for your answers!</span>
            <div className="outro__fields">
                <div className="outro__column" style={{ gridArea: 'a' }}>
                    {DRIVER_FIELDS.map(([prop, value], index) => (
                        <div className="outro__field" key={`driver_field-${index}`}>
                            <span className="outro__prop">{prop}:</span>
                            <span>{value}</span>
                        </div>
                    ))}
                </div>
                <div className="outro__column" style={{ gridArea: 'b' }}>
                    {BUS_FIELDS.map(([prop, value], index) => (
                        <div className="outro__field" key={`driver_field-${index}`}>
                            <span className="outro__prop">{prop}:</span>
                            <span>{value}</span>
                        </div>
                    ))}
                </div>
                <div style={{ gridArea: 'c' }}>{summary}</div>
            </div>
            <Button onClick={handleGoHome}>Go Home</Button>
        </div>
    )
}

export default Outro;