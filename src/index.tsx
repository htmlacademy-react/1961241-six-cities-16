import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/app';

const Setting = {
  OffersCount: 312,
} as const;

export enum AppRoute {
  Root = '/',
  Login = '/login',
  Favorites = '/favorites',
  Offer = '/offer',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App offersCount={Setting.OffersCount} />
  </React.StrictMode>
);
