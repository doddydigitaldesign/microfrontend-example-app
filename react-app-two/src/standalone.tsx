import {
    Button,
    CssBaseline,
    Grid,
    Paper,
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

    console.log('React App Two -> Standalone props:');
    console.table({ children, channel, ...props });

    useEffect(() => {
        channel?.postMessage('Mounting React App Two -> Standalone');

        const listener = (msgEvent: MessageEvent<any>): void => {
            console.log('React App Two -> BroadcastChannel -> Message Event:');
            console.table(msgEvent);
            setReceived(msgEvent.data);
        };
        channel?.addEventListener('message', listener);

        return () => {
            channel?.postMessage('Unmounting React App Two -> Standalone');
            channel?.removeEventListener('message', listener);
        };
    }, []);

    return (
        <ThemeProvider theme={unstable_createMuiStrictModeTheme()}>
            <CssBaseline />
            <div {...props}>
                <Paper elevation={8} sx={{ padding: '2rem' }}>
                    <Typography variant={'h2'}>React App Two</Typography>
                    <Typography>Counter: {counter}</Typography>

                    <Button
                        onClick={(e) => {
                            setCounter(() => counter + 1);
                        }}
                        variant="contained"
                    >
                        Increment
                    </Button>
                    <Button
                        onClick={(e) => {
                            setCounter(() => counter - 1);
                        }}
                        variant="contained"
                    >
                        Decrement
                    </Button>

                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            channel?.postMessage(message);
                        }}
                    >
                        <Grid container spacing={2}>
                            <Grid item xs={8}>
                                <textarea
                                    onChange={(e) => {
                                        setMessage(e.target.value);
                                    }}
                                    title={'A message to send'}
                                />
                            </Grid>
                            <Grid item xs={8}>
                                <Button variant="outlined" type={'submit'}>
                                    Send
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
                    <p>Received: {received}</p>
                </Paper>
            </div>
        </ThemeProvider>
    );
};

export default Standalone;
