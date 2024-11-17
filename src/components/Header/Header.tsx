import {useBoundStore} from "../../store/store";

import './Header.css';

const Header = () => {

    const { page } = useBoundStore();

    const pages = [
        'Introduction',
        'Driver',
        'Bus',
        'Summary',
        'Outro',
    ]

    return (
        <header className="header">
            {pages.map((label, index) => (
                <div className={`header__page ${page === index + 1 ? 'header__page--active' : ''}`}>
                    {label}
                </div>
            ))}
        </header>
    )
}

export default Header;