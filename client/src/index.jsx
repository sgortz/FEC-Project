import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import App from './components/App.jsx';

const root = ReactDOMClient.createRoot(document.getElementById('root'));

root.render(<App />);