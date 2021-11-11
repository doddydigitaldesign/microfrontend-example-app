import {
    Paper,
    ThemeProvider,
    unstable_createMuiStrictModeTheme
} from '@mui/material';
import React from 'react';
import { themeOptions } from './theme';

declare global {
    namespace JSX {
        interface IntrinsicElements {
            'react-app-one': any;
            'react-app-two': any;
        }
    }
}
const theme = unstable_createMuiStrictModeTheme(themeOptions);

export const App: React.FC = (props) => {
    return (
        <React.StrictMode>
            <ThemeProvider theme={theme}>
                <div id="orchestra">
                    <h1>Microfrontend App</h1>
                    <h3>
                        Another PoC of how to go about structuring a
                        microfrontend application.
                    </h3>
                    <ul>
                        <li>
                            Independent deployment of each microfrontend: 👍
                        </li>
                        <li>Style isolation: 👍</li>
                        <li>Technology neutral: 👍</li>
                        <li>
                            Message-passing between microfrontends with
                            BroadcastChannel: 👍
                        </li>
                    </ul>
                    <div
                        style={{
                            margin: '10px',
                            padding: '10px',
                            textAlign: 'center',
                            backgroundColor: 'greenyellow',
                        }}
                    ></div>
                    <Paper>
                        <div
                            style={{
                                display: 'grid',
                                // padding: '1rem',
                                gridTemplateColumns: '1fr auto',
                                gridTemplateRows: '1fr',
                                placeItems: 'center',
                            }}
                        >
                            {props.children}
                        </div>
                    </Paper>
                </div>
            </ThemeProvider>
        </React.StrictMode>
    );
};
