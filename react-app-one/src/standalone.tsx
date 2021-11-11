import {
    Button,
    CssBaseline,
    Paper,
    TextareaAutosize,
    ThemeProvider,
    Typography,
    unstable_createMuiStrictModeTheme
} from '@mui/material';
import React, { HTMLAttributes, useEffect, useState } from 'react';

interface Props extends HTMLAttributes<HTMLDivElement> {
    channel?: BroadcastChannel;
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
    console.table({ children, channel, ...props });

    useEffect(() => {
        channel?.postMessage('Mounting React App One -> Standalone');

        const listener = (msgEvent: MessageEvent<any>): void => {
            console.log('React App One -> BroadcastChannel -> Message Event:');
            console.table(msgEvent);
            setReceived(msgEvent.data);
        };
        channel?.addEventListener('message', listener);

        return () => {
            channel?.postMessage('Unmounting React App One -> Standalone');
            channel?.removeEventListener('message', listener);
        };
    }, []);

    return (
        <ThemeProvider theme={unstable_createMuiStrictModeTheme()}>
            <CssBaseline />
            <div {...props}>
                <Paper elevation={5} sx={{ padding: '2rem' }}>
                    <Typography variant={'h2'}>React App One</Typography>
                    <Typography>Counter: {counter}</Typography>
                    <Button
                        onClick={(e) => {
                            setCounter(() => counter + 1);
                        }}
                    >
                        Increment
                    </Button>
                    <Button
                        onClick={(e) => {
                            setCounter(() => counter - 1);
                        }}
                    >
                        Decrement
                    </Button>
                    {children}
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            channel?.postMessage(message);
                        }}
                    >
                        <TextareaAutosize
                            onChange={(e) => {
                                setMessage(e.target.value);
                            }}
                            title={'A message to send'}
                            maxRows={4}
                            aria-label={'maximum height'}
                            placeholder={'Maximum 4 rows'}
                            defaultValue={
                                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                            }
                            style={{ width: 200 }}
                        />
                        <Button type={'submit'}>Send</Button>
                    </form>
                    <Typography>Received: {received}</Typography>
                </Paper>
            </div>
        </ThemeProvider>
    );
};

export default Standalone;
