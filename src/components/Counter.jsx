import { useState } from 'preact/hooks';

export default function Counter({ children }) {
    const [count, setCount] = useState(0);
    const add = () => setCount((i) => i + 1);
    const subtract = () => setCount((i) => i - 1);

    return (
        <>
            <div class="counter">
                React counter
                <button onClick={subtract}>-</button>
                {count}
                <button onClick={add}>+</button>
            </div>
            <div class="counter-message">{children}</div>
        </>
    );
}
