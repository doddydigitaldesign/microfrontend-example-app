import React from 'react';

declare global {
    namespace JSX {
        interface IntrinsicElements {
            'react-app-one': any;
            'react-app-two': any;
        }
    }
}

export const App: React.FC = (props) => {
    return (
        <div id="orchestra">
            <h1>Microfrontend App</h1>
            <h3>
                Another PoC of how to go about structuring a microfrontend
                application.
            </h3>
            <ul>
                <li>Independent deployment of each microfrontend: 👍</li>
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

            {props.children}
        </div>
    );
};
