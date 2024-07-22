import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from '../components/pages/main-page/main-page';
import { AppRoute, AuthorizationStatus } from '..';
import LoginPage from '../components/pages/login-page/login-page';
import FavoritesPage from '../components/pages/favorites-page/favorites-page';
import OfferLogged from '../components/pages/offer-page/offer-page-logged';
import NotFoundPage from '../components/pages/not-found-page/not-found-page';
import PrivateRoute from '../components/private-route';
import { HelmetProvider } from 'react-helmet-async';

type AppScreenProps = {
  offersCount: number;
};

function App({ offersCount }: AppScreenProps): JSX.Element {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path={AppRoute.Root}
            element={<MainPage offersCount={offersCount} />}
          />
          <Route path={AppRoute.Login} element={<LoginPage />} />
          <Route
            path={AppRoute.Favorites}
            element={
              <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}>
                <FavoritesPage />
              </PrivateRoute>
            }
          />
          <Route path={`${AppRoute.Offer}/:id`} element={<OfferLogged />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
