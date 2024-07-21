import { Helmet } from 'react-helmet-async';
import OfferCards from '../../cards/offer-cards';
import Logo from '../../header/logo/logo';
import FavoritesCount from '../../header/user/favorites-count';
import SignMenu from '../../header/user/sign-menu';
import Username from '../../header/user/username';
import Host from '../../host/host';
import ImageGallery from '../../image-gallery/image-gallery';
import OfferInfo from '../../offer-info/offer-info';
import Reviews from '../../reviews/reviews';

function OfferLogged(): JSX.Element {
  return (
    <div className="page">
      <Helmet>
        <title>6 cities: offer</title>
      </Helmet>
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Logo />
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <Username />
                <FavoritesCount favoriteCount={3} />
                <SignMenu />
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main page__main--offer">
        <section className="offer">
          <div className="offer__gallery-container container">
            <ImageGallery />
          </div>
          <div className="offer__container container">
            <div className="offer__wrapper">
              <OfferInfo />
              <Host />
              <Reviews />
            </div>
          </div>
          <section className="offer__map map"></section>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">
              Other places in the neighbourhood
            </h2>
            <div className="near-places__list places__list">
              <OfferCards />
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default OfferLogged;
