import { Button } from "antd";

import {useBoundStore} from "../../store/store";

import './Intro.css';

const Intro = () => {

    const { nextPage } = useBoundStore();

    return (
        <div className="intro">
            <span>Welcome</span>
            <span>Get busy with a busy!</span>
            <Button onClick={nextPage}>Registration</Button>
        </div>
    )
}

export default Intro;