import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';

const App = React.lazy(() => import('./standalone'));

ReactDOM.render(
    <Suspense fallback={'...loading'}>
        <App />
    </Suspense>,
    document.getElementById('orchestra')
);
