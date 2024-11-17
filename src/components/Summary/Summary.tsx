import {useEffect, useState} from "react";

import {Input, Button} from "antd";

import {useBoundStore} from "../../store/store";

import './Summary.css';

const Summary = () => {

    const { summary, setSummary, nextPage, prevPage } = useBoundStore();

    const [value, setValue] = useState<string>(summary);
    const [hasSubmit, setHasSubmit] = useState<boolean>(false);

    const error = hasSubmit ? (value ? (value.length >= 100 ? '' : 'At least 100 symbols') : 'Required field') : '';

    useEffect(() => {
        setSummary(value);
    }, [value]);

    const handleSubmit = () => {
        if (value && value.length >= 100) nextPage();
        if (!hasSubmit) setHasSubmit(true);
    }

    return (
        <form className="summary">
            <div className="summary__field">
                <label htmlFor="summary">A few words, why have you chose our company:</label>
                <Input.TextArea
                    id="summary"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    style={{ height: '200px' }}
                />
                {error && <span className="summary__error">{error}</span>}
            </div>
            <Button className="summary__next" onClick={handleSubmit}>Finish</Button>
        </form>
    )
}

export default Summary;