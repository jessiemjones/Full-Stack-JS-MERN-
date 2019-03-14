import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import BountieProvider from './BountieProvider'
import {BrowserRouter} from 'react-router-dom'

ReactDOM.render(
<BountieProvider>
    <BrowserRouter>
        <App />
    </BrowserRouter>
</BountieProvider>
, document.getElementById('root'));