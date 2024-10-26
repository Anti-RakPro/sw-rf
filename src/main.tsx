import React from 'react';
import ReactDOM from 'react-dom/client';
import NameBar from "./components/NameBar.tsx";


import App from './App';

import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <App/>
        <NameBar/>

    </React.StrictMode>
);
