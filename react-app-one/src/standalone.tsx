import React, { HTMLAttributes, useEffect, useState } from 'react';

interface Props extends HTMLAttributes<HTMLDivElement> {
    channel: BroadcastChannel;
}

export const Standalone: React.FC<Props> = ({
    children,
    channel,
    ...props
}) => {
    const [counter, setCounter] = useState(0);
    const [message, setMessage] = useState('');
    const [received, setReceived] = useState('');

    console.log('React App One -> Standalone props:');
    console.table({children, channel, ...props});

    useEffect(() => {
        channel.postMessage('Mounting React App One -> Standalone')

        const listener = (msgEvent: MessageEvent<any>): void => {
            console.log('React App One -> BroadcastChannel -> Message Event:');
            console.table(msgEvent);
            setReceived(msgEvent.data);
        };
        channel.addEventListener('message', listener);

        return () => {
            channel.postMessage('Unmounting React App One -> Standalone')
            channel.removeEventListener('message', listener);
        };
    }, []);

    return (
        <div
            style={{
                minWidth: '500px',
                minHeight: '200px',
            }}
            {...props}
        >
            <h1>React App One</h1>
            <p>Counter: {counter}</p>
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
            {children}
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    channel.postMessage(message);
                }}
            >
                <textarea
                    onChange={(e) => {
                        setMessage(e.target.value);
                    }}
                    title={'A message to send'}
                />
                <button type={'submit'}>Send</button>
            </form>
            <p>Received: {received}</p>

        </div>
    );
};
