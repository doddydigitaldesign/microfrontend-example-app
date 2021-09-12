import React, { useState } from 'react';

export const Standalone: React.FC = (props: any) => {
    const [counter, setCounter] = useState(0);
    return (
        <div

            style={{
                minWidth: '500px',
                minHeight: '200px',
            }}
            {...props}
        >
            <h1>Hello from React App Two</h1>
            <button
                onClick={(e) => {
                    setCounter(() => counter + 1);
                }}
            >
                Increment
            </button>
            <button
                onClick={(e) => {
                    setCounter(() => counter - 1);
                }}
            >
                Decrement
            </button>
        </div>
    );
};
