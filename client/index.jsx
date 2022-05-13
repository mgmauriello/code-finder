import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app';

import.meta.webpackHot?.accept();
import.meta.webpackHot?.dispose(() => root.unmount());

const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);

root.render(<App />);
