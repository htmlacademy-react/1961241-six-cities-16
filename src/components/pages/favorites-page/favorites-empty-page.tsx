import Logo from '../../header/logo/logo';
import FavoritesCount from '../../header/user/favorites-count';
import SignMenu from '../../header/user/sign-menu';
import Username from '../../header/user/username';

function FavoritesEmptyPage(): JSX.Element {
  return (
    <div className="page page--favorites-empty">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Logo />
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <Username />
                <FavoritesCount favoriteCount={0} />
                <SignMenu />
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main page__main--favorites page__main--favorites-empty">
        <div className="page__favorites-container container">
          <section className="favorites favorites--empty">
            <h1 className="visually-hidden">Favorites (empty)</h1>
            <div className="favorites__status-wrapper">
              <b className="favorites__status">Nothing yet saved.</b>
              <p className="favorites__status-description">
                Save properties to narrow down search or plan your future trips.
              </p>
            </div>
          </section>
        </div>
      </main>
      <footer className="footer">
        <Logo />
      </footer>
    </div>
  );
}

export default FavoritesEmptyPage;
