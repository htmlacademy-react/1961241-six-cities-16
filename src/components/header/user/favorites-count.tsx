interface AppFavoriteCounts {
  favoriteCount: number;
}

function FavoritesCount({ favoriteCount }: AppFavoriteCounts): JSX.Element {
  return <span className="header__favorite-count">{favoriteCount}</span>;
}

export default FavoritesCount;
