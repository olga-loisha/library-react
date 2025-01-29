import { useContext, useState } from 'react';

import './CounterInput.css';
import { ThemeContext } from '../../contexts/themeContext';

const CounterInput = (props: any) => {
    const { currentTheme } = useContext(ThemeContext);
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    }

    const decrement = () => {
        setCount(count - 1);
    }

    const changeCountValue = (value: string) => {
        setCount(Number(value));
    }

    const checkCounter = () => {
        if (!count) {
            setCount(0);
        }
    }

    return (
        <div className={`counter-input-container theme-${currentTheme}`}>
            <button className="decrement-button" onClick={decrement} disabled={count <= 0}>-</button>
            <input ref={props.ref} type="number" value={count.toString()} onBlur={checkCounter}
                   onChange={(e) => changeCountValue(e.target.value)} className="counter-input"/>
            <button className="increment-button" onClick={increment}>+</button>
        </div>
    )
}

export default CounterInput;