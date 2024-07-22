import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/app';

const Setting = {
  OffersCount: 312,
} as const;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App offersCount={Setting.OffersCount} />
  </React.StrictMode>
);
