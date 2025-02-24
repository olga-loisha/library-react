import { useContext } from 'react';

import './Button.css';
import { ThemeContext } from '../../contexts/themeContext';
import { ButtonProps } from '../../models';

const Button = (props: ButtonProps) => {
    const { children, onButtonClick } = props
    const { currentTheme } = useContext(ThemeContext);

    return (
        <button className={`button button-${currentTheme}`} onClick={onButtonClick}>{children}</button>
    )
};

export default Button;