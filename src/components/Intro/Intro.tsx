import { Button } from "antd";

import {useBoundStore} from "../../store/store";

import './Intro.css';

const Intro = () => {

    const { nextPage } = useBoundStore();

    return (
        <div className="intro">
            <span>Welcome!</span>
            <span>Get busy with a BUSy!</span>
            <Button onClick={nextPage}>Registration</Button>
            <span>To get a driver's job you need to:</span>
            <ul className="intro__list">
                <li>Be over 25 years old</li>
                <li>Have at least 2 years of experience</li>
                <li>Provide a valid contact info (phone and email)</li>
                <li>Have a supported bus model not older than 14 years</li>
                <li>Provide a valid car numbers</li>
                <li>Tell us why have you chose our company</li>
            </ul>
        </div>
    )
}

export default Intro;