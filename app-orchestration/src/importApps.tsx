import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';

//@ts-ignore
const AppOne = React.lazy(() => import('reactAppOne/App'));
//@ts-ignore
const AppTwo = React.lazy(() => import('reactAppTwo/App'));
const RemoteApps = () => {

    return (
        <div>
            <Suspense fallback={<span>...Loading remote app</span>}>
                <AppOne />
            </Suspense>
            <Suspense fallback={<span>...Loading remote app</span>}>
                <AppTwo />
            </Suspense>
        </div>
    );
};

ReactDOM.render(
    <App>
        <RemoteApps />
    </App>,
    document.getElementById('orchestra')
);
